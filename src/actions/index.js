import {INCREMENT,DECREMENT} from '../contants/index'

export const increment =()=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type:INCREMENT
            })
        },5000)
    }
}

export const decrement = () =>{
    return {
        type:DECREMENT

    }
}