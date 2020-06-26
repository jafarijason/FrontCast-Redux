import React, { Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.state = {
      count: 2
    }

  }

  increment() {
    console.log('Increment');
  }
  decrement() {
    console.log('Decrement');
  }
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.decrement}>Deccrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App