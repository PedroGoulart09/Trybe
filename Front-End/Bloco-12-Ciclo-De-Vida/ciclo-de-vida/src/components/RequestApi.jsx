import React, { Component } from 'react'

export default class RequestApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jokeObj: undefined,
            loading: true,
            storedJokes: [],

        }
        this.fetchJoke = this.fetchJoke.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    async fetchJoke() {
        const header = { headers: { Accept: 'application/json' } }
        const fetchUrl = await fetch('https://icanhazdadjoke.com/', header)
        const request = await fetchUrl.json();

        this.setState({
            jokeObj: request
        })
    }

    componentDidMount() {
        this.fetchJoke();
    }

    renderJokeElement() {
        return (
            <div>
                <p>{this.state.jokeObj.joke}</p>
                <button type="button" onClick={this.saveJoke}>
                    Salvar piada!
                </button>
            </div>
        );
    }

    render() {
        const { storedJokes,jokeObj } = this.state;
        const loadingElement = <span>Loading...</span>;
        return (
            <div>

                <span>
                    {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
                </span>

                <span>RENDERIZAÇÃO CONDICIONAL</span>

                <h3>{jokeObj ? jokeObj.joke : loadingElement }</h3>


            </div>
        )
    }
}
