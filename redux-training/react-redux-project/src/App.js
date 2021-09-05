import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
    return (
        <React.Fragment>
            <Header />
            {isAuthenticated ? <UserProfile /> : <Auth />}
            <Counter />
        </React.Fragment>
    );
}
export default App;