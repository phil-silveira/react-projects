import React, { Component } from 'react';
import {connect} from 'react-redux'

import appActions from './reducers/appActions'

import './App.css';

class App extends Component {
  changeText() {
    this.props.dispatch(appActions.changeText('Novo texto'))
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={() => this.changeText()}>Mudar texto</button>
      </div>
    )
  }
}

export default connect(store => {
  return { text: store.text }
})(App)