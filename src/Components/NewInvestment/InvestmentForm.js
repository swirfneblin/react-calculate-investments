import { useState } from "react";

const Form = (props) => {
  const [inputData, setInputData] = useState({});
  const valueChangeHandler = (event) => {
    setInputData((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  const resetClickHandler = (event) => {
    event.preventDefault();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveInvestment(inputData);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
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
      <div className="input-group">
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
      <p className="actions">
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        <button type="reset" className="buttonAlt" onClick={resetClickHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
