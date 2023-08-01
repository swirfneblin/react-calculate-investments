import { useState } from "react";
import Header from "./Components/UI/Header";
import InvestmentForm from "./Components/NewInvestment/InvestmentForm";
import TableRow from "./Components/UI/TableRow";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const calculateHandler = (data) => {
    let currentSavings = parseInt(data["current-savings"]);
    const yearlyContribution = parseInt(data["yearly-contribution"]);
    const expectedReturn = parseInt(data["expected-return"]) / 100;
    const duration = parseInt(data["duration"]);
    const output = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      output.push({
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(yearlyContribution),
      });
    }
    return output;
  };

  const saveInvestmentHandler = (investmentData) => {
    setYearlyData([]);
    const calculatedValues = calculateHandler(investmentData);
    setYearlyData(calculatedValues);
  };

  return (
    <div>
      <Header className="header" />
      <InvestmentForm onSaveInvestment={saveInvestmentHandler} />

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
          {yearlyData.map((data, idx) => (
            <TableRow
              key={idx}
              year={data.year}
              totalSavings={data.savingsEndOfYear}
              yearlyInterest={data.yearlyInterest}
              totalInterest={data.yearlyInterest}
              investedCapital={data.yearlyContribution}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
