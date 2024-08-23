import React from "react"
import { Input } from "../atoms/Input"
import { H1 } from "../atoms/H1"
import { Button } from "../atoms/Button"
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from "../../action";
import styled from 'styled-components';

const SignFormStyle = styled.div`
    width: 400px;
    height: 400px;
    margin-top: 60px;
`

export const SignupForm = () => {
    const obj = useSelector(state => state.inputReducer)
    // const sign = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();

    const signup = () => {
        console.log(obj)
        dispatch(signupAction(obj));
    }

    return (
        <SignFormStyle>
            <h1 className="infoText">회원가입</h1>
            <H1>아이디</H1>
            <Input name="uid" />
            <H1>비밀번호</H1>
            <Input name="upw" />
            <H1>닉네임</H1>
            <Input name="nickName" />
            <Button onClick={signup}>회원가입</Button>
        </SignFormStyle>
    )
}
