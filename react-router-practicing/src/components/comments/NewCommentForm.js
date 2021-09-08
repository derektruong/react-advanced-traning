import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./NewCommentForm.module.css";

const sendCommentData = async (data) => {
    const response = await fetch(
        "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json",
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

const NewCommentForm = (props) => {
    const commentTextRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const value = commentTextRef.current.value.trim();
        // optional: Could validate here
        if (value === "") {
            alert("Comment field is required");
			return;
        }
        // send comment to server
        const id = uuidv4();
        try {
            sendCommentData({ id: id, text: value, quoteID: props.quoteID });
            props.onAddComment({ id: id, text: value, quoteID: props.quoteID });
        } catch (err) {
			alert("Cannot add comment to server");
		}
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
