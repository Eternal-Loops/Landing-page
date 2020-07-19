import styled, {keyframes} from "styled-components";
import splash from "../public/assets/logoel.png";
import React, {Component} from "react";
import App from "./App";


const pulse = keyframes`
    0% {
        opacity:0%;
    }
    50%{
        opacity:50%;
    }
    100% {
        opacity: 80%;
    }
`;

export const Load = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  // border: 0.2em solid rgba(0, 0, 0, 0.1);
  // border-top: 0.2em solid #767676;
  // border-radius: 50%;
  width: 6.28571429rem;
  height: 6.28571429rem;
  animation: ${pulse} 0.5s infinite;
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
 
  
`;


class Loader extends Component {
    constructor(props){
        super(props);
        this.state={
            Loading : true
        }

    }
    componentWillMount(){

    }
    getLoad(){
        setTimeout(() => {

            this.setState({
                Loading : false
            })
        }, 1000)

    }
    componentDidMount() {
        this.getLoad();
    }
    render() {
        return(

            this.state.Loading ? <Load> <img src={splash}/> </Load> : <App/>
                );
        }
}
export default Loader;

