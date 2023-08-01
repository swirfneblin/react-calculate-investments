import { useState } from "react";
import Header from "./Components/UI/Header";
import InvestmentForm from "./Components/NewInvestment/InvestmentForm";
import TableResult from "./Components/NewInvestment/TableResult";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm onSaveInvestment={calculateHandler} />
      {!userInput && <p>Please enter your investment details.</p>}
      {userInput && (
        <TableResult
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}
export default App;
