import React from "react";
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
    }
    .navbar-brand, .navbar-nav, .nav-link{
    }
`;

export const NavigationBar = ()=>(
    <Styles>
        <Navbar>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse></Navbar.Collapse>
        </Navbar>
    </Styles>
)