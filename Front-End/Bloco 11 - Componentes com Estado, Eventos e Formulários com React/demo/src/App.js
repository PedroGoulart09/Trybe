import React, { Component } from 'react'
import Btn from './components/Btn'
import Input from './components/ComponentPrincipal'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      Contador: 0
    }
    this.handClick = this.handClick.bind(this)
  }

handClick(){
 this.setState((state,_props) => ({
   Contador: state.Contador +1
 }))
}

  render() {
    return (
      <div>
        <Btn />
        <button onClick={this.handClick}>{this.state.Contador}</button>
        <Input />
      </div>
    )
  }
}


 
