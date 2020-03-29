import React from "react";
import {Jumbotron as Jumbo, Container, Grid, Row,Col, Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
    }
    .navbar-brand, .navbar-nav, .nav-link{
    }
`;

export const Jumbotron = ()=>(
    <Styles>
        <Grid>
            <Jumbo>

            </Jumbo>
        </Grid>
    </Styles>
)