import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  *as types from './actions/index'
import './App.css';


class App extends Component {
  render() {
    const { increment ,decrement} = this.props;
    const { dispatch } = this.props;

    return (
      <div className="App">
        <div className='container'>
          <h1>{this.props.counter}</h1>
          <button onClick={()=>increment()} className='btn btn-primary'>INCREMENT</button>
          <button onClick={()=>decrement()} className='btn btn-info'>DECREMENT</button>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types,dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
