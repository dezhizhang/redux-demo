import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment,decrement} from './actions/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>{this.props.counter}</h1>
          <button onClick={()=>this.props.increment()} className='btn btn-primary'>INCREMENT</button>
          <button onClick={()=>this.props.decrement()} className='btn btn-info'>DECREMENT</button>
        </div>
      </div>
    );
  }
}

App.propTypes={
  counter:PropTypes.number.isRequired,
  increment:PropTypes.func.isRequired,
  decrement:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
  return {
    counter:state.counter
  }
}

export default connect(mapStateToProps,{increment,decrement})(App)
