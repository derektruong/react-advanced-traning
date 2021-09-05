import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counterReducer.counter);
    const show = useSelector((state) => state.counterReducer.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment({amount: 1}));
    };

    const incrementBy5Handler = () => {
        dispatch(counterActions.increment({amount: 5}));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement({amount: 1}));
    };
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={incrementBy5Handler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {
//     incrementHandler() {
// 		this.props.increment();
// 	}
//     decrementHandler() {
// 		this.props.decrement();
// 	}

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>

//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({ type: "INCREMENT" }),
//         decrement: () => dispatch({ type: "DECREMENT" }),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
