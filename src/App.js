import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/NavigationBar";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
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
