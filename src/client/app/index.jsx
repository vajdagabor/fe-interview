import React from "react";
import { render } from "react-dom";
import Screen from "./components/screen/screen";
import { Tabs, TabsPane } from "./components/tabs/tabs";
import List from "./components/list/list";
import Item from "./components/item/item";
import "./stylesheets/defaults.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3000/bills";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ transactions: data });
      });
  }

  toggleBill(cat) {
    let url = `http://localhost:3000/bills/${cat.id}`;
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ isBill: !cat.isBill }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        let newTransactions = [
          ...this.state.transactions.filter(t => t.id != cat.id),
          data
        ];
        this.setState({ transactions: newTransactions });
      });
  }

  render() {
    return (
      <Screen>
        <Tabs>
          <TabsPane label="Bills">
            <List>
              {this.state.transactions.filter(t => t.isBill).map(t => (
                <Item
                  key={t.id}
                  data={t}
                  toggleBill={() => this.toggleBill(t)}
                />
              ))}
            </List>
          </TabsPane>
          <TabsPane label="Potential">
            <List>
              {this.state.transactions.filter(t => !t.isBill).map(t => (
                <Item
                  key={t.id}
                  data={t}
                  toggleBill={() => this.toggleBill(t)}
                />
              ))}
            </List>
          </TabsPane>
        </Tabs>
      </Screen>
    );
  }
}

render(<App />, document.getElementById("app"));
