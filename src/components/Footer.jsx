import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";


export default class Footer extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>Perusahan</Col>
                    <Col>Tentang Kami</Col>
                    <Col>Media Sosial</Col>

                </Row>
                <div>
                    &copy;<span>{new Date().getFullYear()}</span> <a href="https://www.eternal-loops.com"> Eternal Loops </a>
                </div>
            </Container>

        );
    }

}