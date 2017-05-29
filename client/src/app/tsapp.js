import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route ,hashHistory,IndexRoute} from 'react-router';
import Main from '../frame/simple';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

import TSPage from '../pages/TSPage';
const TSPAGE=()=><TSPage compiler="TypeScript" framework="React" />

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <Route path="home" component={HomePage}/>
            <IndexRoute  component={HomePage}/>
          </Route>
          <Route path="/login" component={LoginPage}/>
          <Route path="/ts" component={TSPAGE}/>
          <Route path="*" component={LoginPage}/>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));