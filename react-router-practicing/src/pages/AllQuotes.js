import React, { useState, useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);
    useEffect(() => {
        setIsLoading(true);

        const fetchQuotes = async () => {
            const response = await fetch(
                "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
            );

            if (response.status !== 200) {
                throw new Error(response.status);
            }

            const data = await response.json();
			
            if(data) {
				setQuotes(Object.values(data));
			} else setQuotes([]);	
        };

        try {
            fetchQuotes();
			setIsLoading(false);
        } catch (err) {
            setHasError(err);
        }
    }, []);

	
    return (
        <React.Fragment>
            {hasError && <h1>Cannot fetch quotes</h1>}
            {!hasError && isLoading && <LoadingSpinner />}
            {!hasError && !isLoading && quotes.length === 0 && (
                <NoQuotesFound />
            )}

			{!hasError && !isLoading && quotes.length !== 0 && (
                <QuoteList quotes={quotes} />
            )}

        </React.Fragment>
    );
};

export default AllQuotes;
