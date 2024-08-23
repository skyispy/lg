import React from "react";
import styled from 'styled-components';

export const H1 = ({children}) => {
    const Info = styled.h1`
        font-size: 22px;
    `
    return <Info>{children}</Info>
}