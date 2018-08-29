import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>{this.props.counter}</h1>
          <button onClick={()=>this.props.dispatch({type:'INCREMENT'})} className='btn btn-primary'>INCREMENT</button>
          <button onClick={()=>this.props.dispatch({type:'DECREMENT'})} className='btn btn-info'>DECREMENT</button>
        </div>
      </div>
    );
  }
}





const mapStateToProps=(state)=>{
  console.log(state);

  return {
    counter:state.counter
  }
}





export default connect(mapStateToProps)(App)
