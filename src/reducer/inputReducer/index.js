const initialState = {
    uid: "",
    upw: "",
    nickName: ""
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "UID":
            return {...state, uid: payload};
        case "UPW":
            return {...state, upw: payload};
        case "NICKNAME":
            return {...state, nickName: payload};
        default:
            return state;
    }
}

export default reducer;