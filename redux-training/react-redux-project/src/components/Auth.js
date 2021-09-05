import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
	// redux
    const dispatch = useDispatch();

	// state local
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitLoginHandler = (event) => {
		event.preventDefault();
		if(email.trim() === "" || password.trim() === "") {
			return;
		} else {
			dispatch(authActions.login());
		}

		
	}

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	}
	
	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	}

    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={submitLoginHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={emailChangeHandler}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={passwordChangeHandler}/>
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
