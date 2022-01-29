import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
        };
    }

    async componentDidMount() {
        const url = await fetch('https://rickandmortyapi.com/api/character')
        const obj = await url.json();
        this.setState({ characters: obj.results })

    }

    render() {
        const { characters } = this.state;
        return (
            <div className="App">
                <div className="body">
                <h1>
                    Ricky and Morty Characters:
                </h1>
                {characters.map(({ name, image }) => (

                    <div className="container">
                        <h3>{name}</h3>
                        <img src={image} alt={name}>
                        </img>
                    </div>
                )
                )}
                </div>
              
            </div>
        );
    }
}

export default App;