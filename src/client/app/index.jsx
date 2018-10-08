import React from 'react';
import {render} from 'react-dom';
import Screen from './components/screen/screen';
import {Tabs, TabsPane} from './components/tabs/tabs';
import "./stylesheets/defaults.scss";

class App extends React.Component {
  render () {
    return (
      <Screen>
        <Tabs>
          <TabsPane label="Bills">
            Bills: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae illum tempore at id possimus, laborum voluptas aliquam sapiente dignissimos laudantium perspiciatis odio odit. Officia, aperiam facilis. Facere, voluptatibus perspiciatis?
          </TabsPane>
          <TabsPane label="Potential">
            Potential: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eos excepturi? Labore quia quas possimus veniam nisi ducimus. Sint asperiores perferendis facilis id quibusdam temporibus repudiandae ea voluptatem dignissimos rem.
          </TabsPane>
        </Tabs>
      </Screen>
    );
  }
}

render(<App/>, document.getElementById('app'));
