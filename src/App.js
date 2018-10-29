import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

import './App.css';

class App extends Component {
  state = {
    userName1: 'Sunny',
    userName2: 'Jim',
  }
  changeInputHandler = (event) => {
    this.setState({
      userName1: event.target.value
    })
  }
  render() {
    const { userName1, userName2 } = this.state
    return (
      <div className="my-app">
        <UserInput changeInput={this.changeInputHandler} inputText={userName1} />
        <UserOutput userName={userName1}>asdfasdf asdf asdfas fasfa sf</UserOutput>
        <UserOutput userName={userName2}>asdfasdf asdfad asdfa fas asdf a</UserOutput>
      </div>
    );
  }
}

export default App;
