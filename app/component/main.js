
var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({

  saludar: function() {
    alert("Hola !!!");
  },

  render: function() {

    var data = this.props.data || [];

    var elements = data.map(function(element, index) {
      return (
        <div key={index}>
          <div>{element.name}</div>
          <div>{element.age}</div>
        </div>
      );
    })

    return (
      <div>
        <h1>Hello World !!!</h1>
        <input type="button" value="Saludar" onClick={this.saludar} />
        {elements}
      </div>
    );
  }
});

module.exports = Main;
