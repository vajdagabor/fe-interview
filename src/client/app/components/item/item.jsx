import React from "react";
import Transactions from "../transactions/transactions";
import "./item.scss";

const Item = props => (
  <li className="c-Item">
    <div className="c-Item__Header">
      <div className="c-Item__Title">{props.data.name}</div>
      <div className="c-Item__Secondary">
        {props.data.transactions.length} transactions
      </div>
    </div>
    <div className="c-Item__Details">
      <Transactions data={props.data.transactions} />
    </div>
  </li>
);

export default Item;
