import React from "react"
import LoginForm from "../molecules/LoginForm"
import { Link } from "react-router-dom"

export const Login = () => {
    return <>
        <LoginForm />
        <Link to={'/signup'}>회원가입</Link>
    </>
}