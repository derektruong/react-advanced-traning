import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();

    const [quote, setQuote] = useState({text: "", author: ""});
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

			setQuote(Object.values(data).filter((q) => q.id === params.quoteID)[0]);
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
                <HighlightedQuote text={quote.text} author={quote.author}/>
            )}

			{!hasError && <Comments quoteID={params.quoteID}/>}
        </React.Fragment>
    );
};

export default QuoteDetail;
