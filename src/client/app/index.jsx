import React from 'react';
import {render} from 'react-dom';
import Screen from './components/screen/screen';
import {Tabs, TabsPane} from './components/tabs/tabs';
import "./stylesheets/defaults.scss";

class App extends React.Component {
  render () {
    return (
      <Screen>
        Hello
      </Screen>
    );
  }
}

render(<App/>, document.getElementById('app'));
