import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout />
      </ MuiThemeProvider>
    );
  }
}

export default App;
