// App.js
import React from 'react';
import './App.css';
import Input from './Inputs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then(({ joke }) => this.setState({ joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        {joke}

        <Input />
      </div>
    );
  }
}

export default App;