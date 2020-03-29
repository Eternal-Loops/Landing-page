import React, {Component} from "react";
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from "../../public/assets/logo3L.png";
import "./Nav.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default class NavigationBar extends Component {
    render(){
        return(
            <Navbar collapseOnSelect expand="md" sticky="top" bg='light'  data-aos="fade-down" data-aos-duration="1500">
                    <Navbar.Brand >
                        <Link to="/">
                            <img src={logo} className="nav-logo" alt="logo" style={{height:'40px'}}/>
                        </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/about">
                        About Us
                    </Nav.Link>
                    <Nav.Link href="/our">
                        Our Works
                    </Nav.Link>

                    <Nav.Link href="/blog">
                        Blog
                    </Nav.Link>

                    <Nav.Link href="/contact">
                        Contact
                    </Nav.Link>

                    <Link to="/whatsapp">
                        <Button variant='outline-success'>Start A Project</Button>
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }

}