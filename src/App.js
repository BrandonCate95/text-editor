import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Editor from './components/Editor'

class App extends Component {

  state = {
    model: "The model",
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Editor />
      </div>
    );
  }
}

export default App;
