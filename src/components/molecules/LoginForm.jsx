import React from "react"
import { Input } from "../atoms/Input"
import { H1 } from "../atoms/H1"
import { Button } from "../atoms/Button"
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from "../../action";
import { useCookies } from 'react-cookie';
import styled from 'styled-components'

const LoginFormStyle = styled.div`
    width: 400px;
    height: 400px;
    margin-top: 60px;
`


const LoginForm = () => {
    const [cookies, setCookie] = useCookies(['isLogin'])
    const obj = useSelector(state => state.inputReducer);
    const isLogin = useSelector(state => state.userReducer.isLogin);
    const dispatch = useDispatch(); 

    
    const login = async () => {
        const obj2 = {
            uid: obj.uid,
            upw: obj.upw
        }
        const token = await dispatch(loginAction(obj2));
        if(token) {
            setCookie('isLogin', token, {path: '/'});
            console.log(isLogin)
        }else {
            console.log("로그인 실패!")
        }
    }

    return <LoginFormStyle>
        <h1 className="infoText">로그인</h1>
        <H1>아이디</H1>
        <Input name="uid" />
        <H1>비밀번호</H1>
        <Input name="upw" />
        <Button onClick={login}>로그인</Button>
    </LoginFormStyle>
}

export default LoginForm