import { useState} from 'react'

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState("");
    const [isTouch, setIsTouched] = useState(false);

	const isValueValid = validateValue(enteredValue);
	const hasError = !isValueValid && isTouch;

	const valueBlurHandler = (event) => {
        setIsTouched(true);
    };

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

	const reset = () => {
		setEnteredValue("");
        setIsTouched(false);
	}

	return {
		value: enteredValue,
		isValid: isValueValid,
		hasError: hasError,
		valueBlurHandler: valueBlurHandler,
		valueChangeHandler: valueChangeHandler,
		reset: reset,
	}
}

export default useInput;