import { SOCIAL_LOGIN_PASS, SOCIAL_LOGIN_FAIL } from './types';

export const userLoader = (token, username) =>(dispatch) =>{
    if(token){
    localStorage.setItem('token', token);
    dispatch({
        type:SOCIAL_LOGIN_PASS,
        payload:username
    });
}else{
    dispatch({
        type:SOCIAL_LOGIN_FAIL
    });
}
}
