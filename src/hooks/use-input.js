import { useState } from "react";

const useInput = (validateValue, defaultVal) => {
  const [ enteredValue, setEnteredValue ] = useState(defaultVal || "");
  const [ isTouched, setIsTouched ] = useState(false);

  const validInput = validateValue(enteredValue);
  const hasError = !validInput && isTouched;

  const  inputChangedHandler = event => {
    setEnteredValue(event.target.value);
  }

  const inputUnfocusHandler = event => {
    setIsTouched(true);
  }

  const reset = () => {
    setEnteredValue(defaultVal);
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: validInput,
    hasError,
    inputChangedHandler,
    inputUnfocusHandler,
    reset
  }
}

export default useInput;