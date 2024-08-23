import React from "react";
import styled from 'styled-components'

export const Button = ({children, onClick}) => {
    const SignBtn = styled.button`
        display: block;
        width: 410px;
        height: 60px;
        background-color: #333;
        color: #efefef;
        font-size: 20px;
        border: 0;
        margin-top: 30px;
    `
    return <SignBtn onClick={onClick}>{children}</SignBtn>
}