import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.header`
    background-color: #1D1D1D;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
`

const H1 = styled.h1`
    font-size: 2.25rem;
    font-family: 'Inder';
    color: #FFFFFF;
`


const Header = () => {
    return (
        <HeaderContainer>
            <H1>Luops</H1>
        </HeaderContainer>
    );
}

export default Header;
        