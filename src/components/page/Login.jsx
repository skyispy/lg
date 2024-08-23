import React from "react"
import LoginForm from "../molecules/LoginForm"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const LoginStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Login = () => {
    return <LoginStyle>
        <LoginForm />
        <Link to={'/signup'} style={{
            marginTop: "20px"
        }}>회원가입</Link>
    </LoginStyle>
}