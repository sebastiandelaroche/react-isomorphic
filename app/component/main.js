
import React from 'react';

export default class Main extends React.Component {

  saludar() {
    alert("Hola !!!");
  }

  render() {
    return (
      <div>
        <h1>Hello World !!!</h1>
        <input type="button" value="Saludar" onClick={this.saludar} />
      </div>
    );
  }

}
