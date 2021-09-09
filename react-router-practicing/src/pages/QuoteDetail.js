import React, { useState, useEffect } from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	const match = useRouteMatch();
    const params = useParams();

    const [quote, setQuote] = useState({ text: "", author: "" });
    const [isQuoteLoading, setIsQuoteLoading] = useState(false);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        setIsQuoteLoading(true);

        const fetchQuotes = async () => {
            const response = await fetch(
                "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
            );

            if (response.status !== 200) {
                throw new Error(response.status);
            }

            const data = await response.json();

            const filterQuote = Object.values(data).find(
                (q) => q.id === params.quoteID
            );

            if (!filterQuote) {
                setHasError(new Error("Quote not found!"));
            } else {
                setQuote(filterQuote);
            }
        };

        try {
            fetchQuotes();
            setIsQuoteLoading(false);
        } catch (err) {
            setHasError(err);
        }
    }, [params.quoteID]);

    return (
        <React.Fragment>
            {hasError && <h1>Cannot fetch quotes</h1>}
            {!hasError && isQuoteLoading && <LoadingSpinner />}

            {!hasError && !isQuoteLoading && (
                <div>
                    <HighlightedQuote text={quote.text} author={quote.author} />
                    <Route path={match.url} exact>
                        <div className="centered">
                            <Link
                                className="btn--flat"
                                to={`${match.url}/comments`}
                            >
                                Show comment
                            </Link>
                        </div>
                    </Route>
                </div>
            )}

            {!hasError && (
                <Route path={`${match.path}/comments`}>
                    <Comments />
                </Route>
            )}
        </React.Fragment>
    );
};

export default QuoteDetail;
