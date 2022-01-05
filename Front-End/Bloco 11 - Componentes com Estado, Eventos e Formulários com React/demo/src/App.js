import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.console1 = this.console1.bind(this)
    this.state = {
      numerosDeCliques: 0
    }
  }
  
  console1() {
    this.setState((estado, props) =>({
      numerosDeCliques:estado.numerosDeCliques +1
      
    }
      ))
  }

  render() {
    return (
      <div>
        <button onClick={this.console1 }>{this.state.numerosDeCliques}</button>
  
      </div>
    )
  }
}
