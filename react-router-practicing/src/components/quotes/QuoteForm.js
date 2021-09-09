import React, { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);
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
        const data = { id: id, text: enteredText, author: enteredAuthor };
        props.onAddNewQuote(data);
    }

    const formFocusedHandler = (event) => {
        setIsEntering(true);
    };

	const finishEnteringHandler = () => {
		setIsEntering(false);
	}

    return (
        <React.Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    "Are you sure you want to leave? All your entered data will be lost"
                }
            />
            <Card>
                <form
                    onFocus={formFocusedHandler}
                    className={classes.form}
                    onSubmit={submitFormHandler}
                >
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
                        <textarea
                            id="text"
                            rows="5"
                            ref={textInputRef}
                        ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className="btn">Add Quote</button>
                    </div>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default QuoteForm;
