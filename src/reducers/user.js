import {FETCH_USER_SUCCESS} from '../contants/index';
const user=(state='zhangdezhi',action)=>{
    switch(action.type){
         case 'FETCH_USER_SUCCESS':
         return action.user;
         default:

        return state
    }
}

export default user;
