import React from 'react';
import { connect } from 'react-redux';
import { get_user } from '../actions/index'
class User extends React.Component{
    render(){
        return (
            <div>
                <h1 className='text-center'>{this.props.user}</h1>
                <button onClick={()=>this.props.get_user()} className='btn btn-info'>button</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user:state.user

    }
}

export default connect(mapStateToProps,{get_user})(User)
