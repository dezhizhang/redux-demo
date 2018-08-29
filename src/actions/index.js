import {INCREMENT,DECREMENT, FETCH_USER_SUCCESS} from '../contants/index'
import axios from 'axios';

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

export const get_user = ()=> {
    return dispatch =>{
        axios.get('https://randomuser.me/api/').then(res=>{
            //console.log(res.data.results[0].email);
            dispatch(fetch_user(res.data.results[0].email));


        }).catch(err=>{
            console.log(err);

        })
    }
}

export const fetch_user = (user) =>{
    return {
        type:FETCH_USER_SUCCESS,
        user
    }
}