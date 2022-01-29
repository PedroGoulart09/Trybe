import React, { Component } from 'react'
import Input from './input'

export default class input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            textarea: '',
            checked: false,
            bodyRender: []

        }
        this.input = this.input.bind(this)
    }

    //FORMA DE UMA FUNÇÃO PARA LIDAR COM TODOS OS ELEMENTOS JUNTOS.

    input(e) {
        const { name } = e.target
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value.toUpperCase()
        })
    }

    renderBody = (e)=> {
        e.preventDefault()
        this.setState({
            bodyRender : [...this.state.bodyRender, {teste: this.state.name}]
        })
    }

    render() {
        return (
            <form>
                <section>
                    <div>
                        <label>
                            Qual seu Estado Favorito:
                            <textarea name="textarea" onChange={this.input}></textarea>
                        </label>

                        <input type="checkbox" name="checked" value={this.state.checked} onChange={this.input}></input>
                    </div>
                 <Input input={this.input} name={this.state.name}/>
                 <button onClick={this.renderBody}>button</button>
                 {this.state.bodyRender.map((item) =>(
                     <h2>{item.teste}</h2>
                 ))}
                </section>
            </form>

        )
    }
}
