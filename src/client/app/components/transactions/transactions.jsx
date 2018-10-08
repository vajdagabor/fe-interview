import React from "react";
import "./transactions.scss";

const numberFormatter = Intl.NumberFormat("en-GB", {
  minimumFractionDigits: 2
});

const enDate = date =>
  new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

const money = amount => numberFormatter.format(amount.toFixed(2));

const Transactions = props => (
  <table className="c-Transactions">
    <tbody>
      {props.data.map((trans, index) => (
        <tr key={index} className="c-Transactions__Row">
          <td className="c-Transactions__Date">{enDate(trans.date)}</td>
          <td className="c-Transactions__Amount">
            <span className="c-Transactions__Currency">£</span>{money(trans.amount)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Transactions;
