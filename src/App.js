import React, { Component } from 'react';
import './App.css';
import Appbar from './components/Appbar';
import Body from './components/Body';
import GoogleAutoComplete from './components/GoogleAutoComplete';

class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <Body />
        {/*<GoogleAutoComplete />*/}
      </div>
    );
  }
}

export default App;
