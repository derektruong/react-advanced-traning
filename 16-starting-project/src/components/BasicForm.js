// import { useState } from "react";
import useInput from "../hooks/use-input";

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: isEnteredFirstNameValid,
        hasError: firstNameInputHasError,
        valueBlurHandler: firstNameBlurHandler,
        valueChangeHandler: firstNameChangeHandler,
        reset: resetFirstNameInput,
    } = useInput((value) => value.trim() !== "");
    const {
        value: enteredLastName,
        isValid: isEnteredLastNameValid,
        hasError: lastNameInputHasError,
        valueBlurHandler: lastNameBlurHandler,
        valueChangeHandler: lastNameChangeHandler,
        reset: resetLastNameInput,
    } = useInput((value) => value.trim() !== "");
    const {
        value: enteredEmailName,
        isValid: isEnteredEmailValid,
        hasError: emailInputHasError,
        valueBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmailInput,
    } = useInput(validateEmail);

    let isFormValid = false;

    if (
        isEnteredFirstNameValid &&
        isEnteredLastNameValid &&
        isEnteredEmailValid
    ) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!isFormValid) return;
        console.log("sda");
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div
                    className={`form-control && ${
                        firstNameInputHasError && "invalid"
                    }`}
                >
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={enteredFirstName}
                        onBlur={firstNameBlurHandler}
                        onChange={firstNameChangeHandler}
                    />
                    {firstNameInputHasError && (
                        <p className="error-text">
                            First name must not be empty!
                        </p>
                    )}
                </div>

                <div
                    className={`form-control && ${
                        lastNameInputHasError && "invalid"
                    }`}
                >
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={enteredLastName}
                        onBlur={lastNameBlurHandler}
                        onChange={lastNameChangeHandler}
                    />
                    {lastNameInputHasError && (
                        <p className="error-text">
                            Last name must not be empty!
                        </p>
                    )}
                </div>
            </div>

            <div
                className={`form-control && ${emailInputHasError && "invalid"}`}
            >
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    value={enteredEmailName}
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                />
            </div>
            {emailInputHasError && (
                <p className="error-text">Check email again!</p>
            )}
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
