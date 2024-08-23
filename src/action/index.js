import axios from 'axios';

export const signupAction = (obj) => {
    const {uid, upw, nickName} = obj
    return async (dispatch, getState) => {
        await axios.post('http://localhost:4000/signup', {uid, upw, nickName});
        dispatch({type: "SIGNUP", payload: {uid, upw, nickName}});
    }
}

export const loginAction = (obj) => {
    try {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/login', obj);
            if(response.data.success) {
                dispatch({type: "LOGIN"});
                return response.data.success;
            }else {
                return false;
            }
        }
    } catch (error) {
        console.log("실패!")
    }
}