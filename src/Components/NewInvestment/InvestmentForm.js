import { useState } from "react";
import classes from "./InvestmentForm.module.css";

const InitialState = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0,
};

const Form = (props) => {
  const [inputData, setInputData] = useState(InitialState);

  const valueChangeHandler = (event) => {
    setInputData((prev) => {
      return {
        ...prev,
        [event.target.id]: +event.target.value,
      };
    });
  };

  const resetClickHandler = (event) => {
    event.preventDefault();
    setInputData(InitialState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveInvestment(inputData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={inputData["current-savings"]}
            onChange={valueChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={inputData["yearly-contribution"]}
            onChange={valueChangeHandler}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={inputData["expected-return"]}
            onChange={valueChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={inputData["duration"]}
            onChange={valueChangeHandler}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetClickHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
