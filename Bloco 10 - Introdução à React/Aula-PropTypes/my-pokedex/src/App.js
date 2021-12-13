import React, { Component } from 'react'
import Pokemon from './data'


class App extends Component {
  render() {
    return (
      <div>
        {Pokemon.map((pokemons) => (
          <section>
            <ul>
              <li>{pokemons.name}</li>
              <li>{pokemons.type}</li>
              <li>{`average Weight : ${pokemons.averageWeight.value} ${pokemons.averageWeight.measurementUnit}`}</li>

              <img src={pokemons.image} alt="pokemons" />

            </ul>

          </section>
        ))}

      </div>
    )
  }
}


export default App;
