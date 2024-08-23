import styled from 'styled-components';
import { useDispatch } from 'react-redux';

export const Input = ({name}) => {
    const input = styled.input`
        
    `
    const dispatch = useDispatch();
    const inputValue = (e) => {
        switch(e.target.name) {
            case "uid":
                dispatch({type: "UID", payload: e.target.value});
                console.log(e.target.value)
                console.log("룩")
                break;
            case "upw":
                dispatch({type: "UPW", payload: e.target.value});
                console.log(e.target.value)
                console.log("룩")
                break;
            case "nickName":
                dispatch({type: "NICKNAME", payload: e.target.value});
                console.log(e.target.value)
                console.log("룩")
                break;
            default:
                break;
        }
    }

    return <input type="text" name={name} onChange={inputValue} />
}