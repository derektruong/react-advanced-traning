import { useState } from "react";
import Output from "./Output";
import Async from "./Async";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(!changedText);
    };

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <Output>It's good to see you</Output>}
            {changedText && <Async />}
            <button onClick={changedTextHandler}>Change Text</button>
        </div>
    );
};

export default Greeting;
