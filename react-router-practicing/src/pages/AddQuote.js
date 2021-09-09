import React from "react";
import { useHistory  } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const sendQuoteData = async (data) => {
    const response = await fetch(
        "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
    );

    if (response.status !== 200) {
        throw new Error("Cannot send data to server");
    }
};

const AddQuote = () => {
	const history = useHistory();

	const addNewQuoteHandler = (newQuote) => {
		
        try {
            sendQuoteData(newQuote);
            history.push("/quote");
        } catch (err) {
            alert("Cannot add comment to server");
        }
	}

    return (
        <React.Fragment>
            <QuoteForm onAddNewQuote={addNewQuoteHandler} />
        </React.Fragment>
    );
};

export default AddQuote;
