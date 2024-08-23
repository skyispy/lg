import React from "react"
import { Input } from "../atoms/Input"
import { H1 } from "../atoms/H1"
import { Button } from "../atoms/Button"
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from "../../action";

export const SignupForm = () => {
    const obj = useSelector(state => state.inputReducer)
    // const sign = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();

    const signup = () => {
        console.log(obj)
        dispatch(signupAction(obj));
    }

    return (
        <>
            <H1>아이디</H1>
            <Input name="uid" />
            <H1>비밀번호</H1>
            <Input name="upw" />
            <H1>닉네임</H1>
            <Input name="nickName" />
            <Button onClick={signup}>회원가입</Button>
        </>
    )
}
