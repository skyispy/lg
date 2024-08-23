import React from "react"
import {SignupForm} from "../molecules/SignupForm"
import styled from 'styled-components'

const SignupStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Signup = () => {
    return <SignupStyle>
            <SignupForm />
        </SignupStyle>

}

export default Signup;