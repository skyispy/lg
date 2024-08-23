import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const PauseInput = styled.input`
    width: 400px;
    height: 50px;
    font-size: 110%;
    padding: 3px 6px;
    text-decoration-line: none
`

export const Input = ({name}) => {
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


    return <PauseInput type="text" name={name} onChange={inputValue} spellCheck={false} />
}