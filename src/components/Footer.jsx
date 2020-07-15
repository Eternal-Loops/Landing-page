import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";


export default class Footer extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>Company</Col>
                    <Col>About US</Col>
                    <Col>Social Media</Col>

                </Row>
                <div>
                    &copy;<span>{new Date().getFullYear()}</span> <a href="https://www.eternal-loops.science"> Eternal Loops </a>
                </div>
            </Container>

        );
    }

}