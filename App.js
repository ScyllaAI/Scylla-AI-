import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';
import ChatBot from './components/ChatBot';
import Wallet from './components/Wallet';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Scylla Project Management</h1>
        </header>
        <Switch>
          <Route path="/projects" component={ProjectList} />
          <Route path="/create" component={CreateProject} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/chat" component={ChatBot} />
          <Route path="/" exact component={ProjectList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;