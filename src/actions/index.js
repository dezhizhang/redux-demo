import {INCREMENT,DECREMENT} from '../contants/index'

export const increment =()=>{
    return {
        type:INCREMENT
    }
}

export const decrement = () =>{
    return {
        type:DECREMENT

    }
}