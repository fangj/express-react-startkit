import React from 'react';
import { Router, Route ,hashHistory,IndexRoute} from 'react-router';
import Main from '../frame/weui';
import HomePage from '../components/weui.example';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <Route path="homepage" component={HomePage}/>
            <IndexRoute  component={HomePage}/>
          </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));