import React, { Component } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App