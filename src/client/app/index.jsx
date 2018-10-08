import React from "react";
import { render } from "react-dom";
import Screen from "./components/screen/screen";
import { Tabs, TabsPane } from "./components/tabs/tabs";
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

  render() {
    return (
      <Screen>
        <Tabs>
          <TabsPane label="Bills">
            {this.state.transactions.filter(t => t.isBill).map(t => (
              t.name
            ))}
          </TabsPane>
          <TabsPane label="Potential">
            {this.state.transactions.filter(t => !t.isBill).map(t => (
              t.name
            ))}
          </TabsPane>
        </Tabs>
      </Screen>
    );
  }
}

render(<App />, document.getElementById("app"));
