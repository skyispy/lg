const initialState = {
    user: [],
    isLogin: false
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    // const {uid, upw, nickName} = payload;
    switch(type) {
        case "SIGNUP":
            return {...state};
        case "LOGIN":
            return {...state, isLogin: true};
        default:
            return state;
    }
}

export default reducer