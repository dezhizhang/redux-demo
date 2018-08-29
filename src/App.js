import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>{this.props.value}</h1>
          <button onClick={this.props.onIncrement} className='btn btn-primary'>INCREMENT</button>
          <button onClick={this.props.onDecrement} className='btn btn-info'>DECREMENT</button>
        </div>
      </div>
    );
  }
}

App.propTypes={
  value:PropTypes.number.isRequired,
  onIncrement:PropTypes.func.isRequired,
  onDecrement:PropTypes.func.isRequired
}

export default App;
