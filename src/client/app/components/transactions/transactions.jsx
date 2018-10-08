import React from "react";
import "./transactions.scss";

const Transactions = props => (
  <table className="c-Transactions">
    <tbody>
      {props.data.map((trans, index) =>
        <tr key={index} className="c-Transactions__Row">
          <td className="c-Transactions__Date">{trans.date}</td>
          <td className="c-Transactions__Amount">£{trans.amount}</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Transactions;
