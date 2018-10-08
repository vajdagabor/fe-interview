import React from "react";
import Transactions from "../transactions/transactions";
import Button from "../button/button";
import "./item.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleExpand() {
    const newIsOpen = !this.state.isOpen;
    this.setState({ isOpen: newIsOpen });
  }

  toggleBill(e) {
    e.stopPropagation();
    this.props.toggleBill();
  }

  render() {
    return (
      <li key={this.props.data.id} className={`c-Item ${this.state.isOpen ? "c-Item--Open" : ""}`}>
        <div className="c-Item__Header" onClick={() => this.toggleExpand()}>
          <div className="c-Item__Summary">
            <div className="c-Item__Title">{this.props.data.name}</div>
            <div className="c-Item__Secondary">
              {this.props.data.transactions.length} transactions
            </div>
          </div>
          <div className="c-Item__Action">
            <Button label={this.props.data.isBill ? "Remove bill" : "Add as bill"} onClick={e => this.toggleBill(e)} />
          </div>
        </div>
        <div className="c-Item__Details">
          <Transactions data={this.props.data.transactions} />
        </div>
      </li>
    );
  }
}

export default Item;
