import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, 
    Routes, 
    Route, 
    Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    container: {
        display: "flex",
        padding: "10px 0px",
},
});


const H1 = styled.h1`
    font-size: 1.65rem;
    font-family: 'Inder';
    color: #FFFFFF;
`

const Ul = styled.ul`
    display: flex;
`

const Li = styled.li`
    text-decoration: none;
    list-style-type: none;
`


const Header = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <H1>Luops</H1>
            <Router>
                <nav>
                    <Ul>
                        <Li>
                            <Link to="/">Home</Link>
                        </Li>
                        <Li>
                            <Link to="/">Projetos</Link>
                        </Li>
                        <Li>
                            <Link to="/">Contato</Link>
                        </Li>
                    </Ul>
                </nav>
            </Router>
        </Container>
    );
}

export default Header;
        