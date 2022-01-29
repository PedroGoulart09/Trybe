import React, { Component } from 'react'

export default class input extends Component {
    render() {
        const {name,input,email,cpf,endereco,cidade} = this.props
        return (
            <div>
                <fieldset>

                    <legend>Dados Pessoais:</legend>

                    <label htmlFor="nome">Nome:
                        <input id="nome"
                            name="name"
                            required
                            maxLength="40"
                            value={name}
                            onChange={input}
                            >
                        </input>
                    </label>

                    <label htmlFor="Email">Email:
                        <input id="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.props.input}
                            >
                        </input>
                    </label>

                    <label htmlFor="CPF">CPF:
                        <input id="CPF"
                            name="cpf"
                            type="number"
                            value={cpf}
                            onChange={this.props.input}
                            >
                        </input>
                    </label>

                    <label htmlFor="Endereço">Endereço:
                        <input id="Endereço"
                            name="endereco"
                            value={endereco}
                            onChange={this.props.input}
                            >
                        </input>
                    </label>

                    <label htmlFor="Cidade">Cidade:
                        <input id="Cidade"
                            name="cidade"
                            value={cidade}
                            onChange={this.props.input}
                            >
                        </input>
                    </label>
                </fieldset>
            </div>
        )
    }
}
