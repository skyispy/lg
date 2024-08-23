import React from "react"
import { Input } from "../atoms/Input"
import { H1 } from "../atoms/H1"
import { Button } from "../atoms/Button"
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from "../../action";
import { useCookies } from 'react-cookie';


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
            await console.log(isLogin)
        }else {
            console.log("로그인 실패!")
        }
    }

    return <>
        <H1>아이디</H1>
        <Input name="uid" />
        <H1>비밀번호</H1>
        <Input name="upw" />
        <Button onClick={login}>로그인</Button>
    </>
}

export default LoginForm