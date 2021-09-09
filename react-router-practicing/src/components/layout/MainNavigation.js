import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <h2 className={classes.logo}>Greate Quotes</h2>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quote" activeClassName={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/new-quote"
                            activeClassName={classes.active}
                        >
                            Add a quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
