import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentsList";

const Comments = (props) => {
	const params = useParams();
    const [isAddingComment, setIsAddingComment] = useState(false);
    const [listComment, setListComment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        const fetchQuotes = async () => {
            const response = await fetch(
                "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json"
            );

            if (response.status !== 200) {
                throw new Error(response.status);
            }

            const data = await response.json();
            if (data) {
                setListComment(
                    Object.values(data).filter(
                        (cmt) => cmt.quoteID === params.quoteID
                    )
                );
            } else {
                setListComment([]);
            }
        };

        try {
            fetchQuotes();
            setIsLoading(false);
        } catch (err) {
            setHasError(err);
        }
    }, [params.quoteID]);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addCommentHandler = (data) => {
        setListComment((prevComments) => {
            return [...prevComments, data];
        });
    };

    let content = <h2>Cannot get user comments</h2>;
    if (!hasError && isLoading) {
        content = <p>Loading comments</p>;
    } else if (!hasError && !isLoading) {
        content = (
            <React.Fragment>
                <h2>User Comments</h2>
                {!isAddingComment && (
                    <button className="btn" onClick={startAddCommentHandler}>
                        Add a Comment
                    </button>
                )}
                {isAddingComment && (
                    <NewCommentForm
                        onAddComment={addCommentHandler}
                        quoteID={params.quoteID}
                    />
                )}
                {listComment.length === 0 ? (
                    <p>No comment were added yet!</p>
                ) : (
                    <CommentList comments={listComment} />
                )}
            </React.Fragment>
        );
    }

    return <section className={classes.comments}>{content}</section>;
};

export default Comments;
