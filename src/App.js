import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/NavigationBar";
import Footer from "./components/Footer";
import './App.css';
import styled, {keyframes} from "styled-components";
import splash from '../public/assets/logoel.png';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  background-image:url(${splash});
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;


class App extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         Loading : true
    //     }
    //
    // }
    //
    // componentDidMount() {
    //     setTimeout(function () {
    //         this.setState({
    //             Loading : false
    //         },1000)
    //     })
    //
    // }

    render() {
    return (
        // this.state.Loading ? <Loader/> :

        <Router>

                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/works" component={Works}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
                <Footer/>
        </Router>
  );
  }
}

export default App;
