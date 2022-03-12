import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main';
import Result from './pages/SearchResult';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/repository/:repositoryName+" component={Result} />
        </Switch>
      </Router>
    );
  }
}
