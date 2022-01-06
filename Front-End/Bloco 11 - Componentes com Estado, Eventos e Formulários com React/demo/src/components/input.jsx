import React, { Component } from 'react'

export default class input extends Component {
   constructor(props) {
       super(props)
       this.state = {
           valueInput: '',
           textarea : '',
           checked : false
       }
       this.input = this.input.bind(this)
   }

//FORMA DE UMA FUNÇÃO PARA LIDAR COM TODOS OS ELEMENTOS JUNTOS.

   input(e){
       const {name} = e.target
       const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
       this.setState({
           [name]: value
       })
       
   }


    render() {
        return (
            <div>
                <input name="valueInput" value={this.state.valueInput} onChange={this.input}></input>
                <p>{this.state.valueInput}</p>

                <div>
                    <label>
                Qual seu Estado Favorito:
                    <textarea name="textarea" value={this.state.textarea} onChange={this.input}></textarea>
                    </label>

                    <input type="checkbox" name="checked" value={this.state.checked} onChange={this.input}></input>
                </div>
            </div>
        )
    }
}
