import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import InputGroup from "./Components/InputGroup";
import ButtonGroup from "./Components/ButtonGroup";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TableRow from "./Components/TableRow";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  // const [currentSavings, setCurrentSavings] = useState(0);
  // const [yearlyContribution, setYearlyContribution] = useState(0);
  // const [expectedReturn, setExpectedReturn] = useState(0);
  // const [duration, setDuration] = useState(0);

  const calculateHandler = (userInput) => {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const data = {
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      };
      setYearlyData((prev) => [...prev, data]);
    }
  };

  const resetClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header className="header" />
      <Form>
        <InputGroup>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <Input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <Input type="number" id="yearly-contribution" />
          </p>
        </InputGroup>
        <InputGroup>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <Input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <Input type="number" id="duration" />
          </p>
        </InputGroup>
        <ButtonGroup>
          <Button
            type="reset"
            className="buttonAlt"
            onClick={resetClickHandler}
          >
            Reset
          </Button>
          <Button type="submit" className="button">
            Calculate
          </Button>
        </ButtonGroup>
      </Form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((yearlyData) => (
            <TableRow
              key={yearlyData.year}
              year={yearlyData.year}
              totalSavings={yearlyData.savingsEndOfYear}
              yearlyInterest={yearlyData.yearlyInterest}
              totalInterest={yearlyData.yearlyInterest}
              investedCapital={yearlyData.yearlyContribution}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
