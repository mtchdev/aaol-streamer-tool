import React, { Component } from 'react';
import Titlebar from './components/Titlebar';
import Main from './views/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Main />
      </div>
    );
  }
}

export default App;
