import React from "react";
import "./tabs.scss";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  switchToTab(index) {
    this.setState({active: index});
  }

  render() {
    return (
      <div className="c-Tabs">
        <nav className="c-Tabs__Nav">
          {this.props.children.map((pane, index) =>
            <button
              key={pane.props.label}
              className={`c-Tabs__Button${ this.state.active === index ? " c-Tabs__Button--Active" : ""}`}
              onClick={() => this.switchToTab(index)}
            >
              {pane.props.label}
            </button>
          )}
        </nav>
        <div className="c-Tabs__Content">{this.props.children[this.state.active]}</div>
      </div>
    );
  }
}

const TabsPane = props => <div>{props.children}</div>;

export { Tabs, TabsPane };
