import React, { Component } from 'react'


class App extends Component {
  render() {
    return (
      <div>
        {this.props.pokemons.map(({ id, name, type, averageWeight, image }) => (
          <section>
            <ul>
              <li>{name}</li>
              <li>{type}</li>
              <li>{`average Weight : ${averageWeight.value} ${averageWeight.measurementUnit}`}</li>

              <img src={image} alt="pokemons" />

            </ul>

          </section>
        ))}
      </div>
    )
  }
}


export default App;
