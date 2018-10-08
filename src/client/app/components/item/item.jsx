import React from "react";
import Transactions from "../transactions/transactions";
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

  render() {
    return (
      <li className={`c-Item ${this.state.isOpen ? "c-Item--Open" : ""}`}>
        <div className="c-Item__Header" onClick={() => this.toggleExpand()}>
          <div className="c-Item__Title">{this.props.data.name}</div>
          <div className="c-Item__Secondary">
            {this.props.data.transactions.length} transactions
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
