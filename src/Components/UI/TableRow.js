const TableRow = (props) => {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.totalSavings}</td>
      <td>{props.yearlyInterest}</td>
      <td>{props.totalInterest}</td>
      <td>{props.investedCapital}</td>
    </tr>
  );
};

export default TableRow;
