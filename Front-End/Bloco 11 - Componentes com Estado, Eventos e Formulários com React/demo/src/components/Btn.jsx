import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.handleButtonOne = this.handleButtonOne.bind(this);
   
  }

  handleButtonOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }));
  }

   getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, } = this.state;
    return (
      <div>
        <button onClick={ this.handleButtonOne }
         style={{ backgroundColor: 
         this.getButtonColor(clicksBtnOne) }}  
         > Botão 1 | Count = { clicksBtnOne } 
         </button>
      </div>
    );
  }
}

export default App;