import { useRef } from "react";
import { useHistory  } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

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

const QuoteForm = (props) => {
	const history = useHistory();
    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value.trim();
        const enteredText = textInputRef.current.value.trim();

        // optional: Could validate here
        if (enteredAuthor === "" || enteredText === "") {
            alert("Both fields are required!");
            return;
        }
        //
        const id = uuidv4();
        try {
            const data = { id: id, text: enteredText, author: enteredAuthor };
            sendQuoteData(data);
            history.push("/quotes");
        } catch (err) {
            alert("Cannot add comment to server");
        }
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitFormHandler}>
                {props.isLoading && (
                    <div className={classes.loading}>
                        <LoadingSpinner />
                    </div>
                )}

                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" rows="5" ref={textInputRef}></textarea>
                </div>
                <div className={classes.actions}>
					<button className="btn">Add Quote</button>
                </div>
            </form>
        </Card>
    );
};

export default QuoteForm;
