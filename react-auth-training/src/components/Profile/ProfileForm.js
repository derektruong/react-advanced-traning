import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const newPasswordInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        // add validation
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD_yz3z3SSLZQNvnNm5HTrBzQrofQtmFMs",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
            }
        ).then((response) => {
            if (response.status !== 200) {
                console.log("failed");
            }
			history.replace("/");
        });
    };

    return (
        <form onSubmit={submitFormHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    ref={newPasswordInputRef}
                    type="password"
                    id="new-password"
                    minLength="7"
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
