import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.authReducer.isAuthenticated
    );

    const logoutClickHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                {isAuthenticated && (
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>

                        <li>
                            <button onClick={logoutClickHandler}>Logout</button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
