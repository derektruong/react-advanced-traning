// import { useState } from "react";
import useInput from "../hooks/use-input";

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const SimpleInput = (props) => {
    const {
        value: enteredName,
		isValid: isEnteredNameValid,
        hasError: nameInputHasError,
        valueBlurHandler: nameInputBlurHandler,
		valueChangeHandler: nameInputChangeHandler,
		reset: resetNameInput
    } = useInput(value => value.trim() !== '');

	const {
        value: enteredEmail,
		isValid: isEnteredEmailValid,
        hasError: emailInputHasError,
        valueBlurHandler: emailInputBlurHandler,
		valueChangeHandler: emailInputChangeHandler,
		reset: resetEmailInput
    } = useInput(validateEmail);

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }

    // form submition
    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        console.log(enteredName);
        resetNameInput();
        resetEmailInput();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={`form-control ${
                    nameInputHasError && "invalid"
                }`}
            >
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputChangeHandler}
                />
            </div>
            {nameInputHasError && (
                <p className="error-text">Name must not be empty!</p>
            )}
            {/* TODO: add email input */}
            <div
                className={`form-control ${
                    emailInputHasError && "invalid"
                }`}
            >
                <label htmlFor="name">Email</label>
                <input
                    type="text"
                    id="name"
                    value={enteredEmail}
                    onBlur={emailInputBlurHandler}
                    onChange={emailInputChangeHandler}
                />
            </div>
            {emailInputHasError && (
                <p className="error-text">Email is not valid!</p>
            )}

            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
