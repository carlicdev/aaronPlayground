import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cover from './components/Cover/Cover';
import Games from './components/Games/Games';
import Chat from './components/Chat/Chat';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Cover} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
