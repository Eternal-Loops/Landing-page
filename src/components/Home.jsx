import React, {Component, Fragment} from "react";
import {Container, Button, Row, Col, Image} from "react-bootstrap";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imagebg from '../../public/assets/imagebg1.jpg';
import web from '../../public/assets/monitor.png';
import mobile from '../../public/assets/android.png';
import iot from '../../public/assets/robot.png';
import idea from '../../public/assets/consult.jpg';
import contract from '../../public/assets/deal.jpg';
import set from '../../public/assets/main.jpg';
import '../components/Home.css';

AOS.init();

export default class Home extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         left:40,
    //     }
    // }
    //
    // handleMouse(e){
    //     this.setState({
    //        left: e.target.getBoundingClientRect().x-167.5,
    //     });
    // }

    render() {
        return (
                <Fragment>
                <Welcome id="cover" className="position-relative overflow-hidden p-3 p-md-5 ">
                    <Col md={6} className="p-lg-6 mx-auto my-1 aos-all" data-aos="fade-up"  data-aos-duration="2000" >
                        <H1>Wujudkan Ide Anda,</H1>
                        <H1>Bersama Eternal Loops!</H1>
                        <Paragraph className="lead" >Website Developer, Android Developer, IoT Developer.</Paragraph>
                        <Link href='/about'>
                            <Button variant='outline-success' style={{marginRight:'5px'}} >Cerita Kami</Button>

                        </Link>
                        <Link href="#do">
                            <Button variant='outline-success' >Solusi Untuk Anda</Button>
                        </Link>
                    </Col>
                </Welcome>


                <Container style={{maxWidth:'870px'}}>
                        <Head >
                            <h3 id="do" className="aos-all aos-animate" data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="200"
                                data-aos-easing="ease-in-sine" >Yang Kami Tawarkan ?</h3>
                        </Head>



                    <Row id='content' style={{padding:'35px 40px 35px 40px',textAlign:'center'}}>

                        <Col md="auto aos-all aos-animate" data-aos="zoom-in-right" data-aos-duration="1000" style={{borderRight: "solid 1px #dadada"}}>
                            <Link href='/works' style={{textDecoration:'none'}}><br/>
                                <Image src={web} alt="website" style={Styles.icon}/><br/>
                                <H>Amazing Website</H>
                            </Link>
                        </Col>
                        <Col md="auto aos-all aos-animate" data-aos="zoom-in" data-aos-duration="1000" style={{borderRight: "solid 1px #dadada"}}>
                            <Link href='/works' style={{textDecoration:'none'}}><br/>
                                <Image src={mobile} alt="mobile" style={Styles.icon}/><br/>
                                <H>Amazing Mobile Apps</H>
                            </Link>
                        </Col>
                        <Col md="auto aos-all aos-animate" data-aos="zoom-in-left" data-aos-duration="1000">
                            <Link href='/works' style={{textDecoration:'none'}}><br/>
                                <Image src={iot} alt="iot" style={Styles.icon}/><br/>
                                <H>Internet Of Things</H>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6 centered aos-all aos-animate" data-aos="zoom-in" data-aos-duration="1000" style={{borderRight: "solid 1px #dadada"}}>
                            <Link href='/works' style={{textDecoration:'none'}}><br/>
                                <Image src={iot} alt="iot" style={Styles.icons}/><br/>
                                <H style={{textAlign:'center'}}>Data Science</H>
                            </Link>
                        </Col>                                                                                                                                                                      
                        <Col md="6 aos-all aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                            <Link href='/works' style={{textDecoration:'none'}}><br/>
                                <Image src={iot} alt="iot" style={Styles.icons}/><br/>
                                <H style={{textAlign:'center'}}>Computer Vision</H>
                            </Link>
                        </Col>
                    </Row>

                </Container>



                <Content>
                    <Container style={{maxWidth:'960px', marginBottom:'120px'}}>
                        <Row>
                            <Head id="serve">
                                <h3 className="aos-all aos-animate" data-aos="zoom-in-right" data-duration="500" data-aos-offset="100"
                                    data-aos-easing="ease-in-sine" style={{color:'white'}}>Alur Kerja Bersama Kami ?</h3>
                            </Head>
                        </Row>

                        <Row  style={{padding:'35px 40px 35px 40px',textAlign:'center'}}>

                            <Col md="auto aos-all aos-animate" data-aos="zoom-in-right" data-aos-duration="1000"  >
                                <div className='grid'>
                                <figure className='effect'>
                                    <img  src={idea} alt="website" style={Styles.img}/>
                                    <figcaption>
                                        <h5>Konsultasi</h5>
                                        <p>Planning and do briefing with our team to make custom web like you want with best quality and worth the price.</p>

                                    </figcaption>
                                </figure>
                                </div>
                            </Col>
                            <Col md="auto aos-all aos-animate" data-aos="zoom-in" data-aos-duration="1000"  >
                                <div className='grid'>
                                    <figure className='effect'>
                                        <img  src={contract} alt="website" style={Styles.img}/>
                                        <figcaption>
                                            <h5>Kontrak Kerja</h5>
                                            <p>Making MoU with you and then our team will develop custom project special like your request.</p>

                                        </figcaption>
                                    </figure>
                                </div>
                            </Col>
                            <Col md="auto aos-all aos-animate" data-aos="zoom-in-left" data-aos-duration="1000" >
                                <div className='grid'>
                                <figure className='effect'>
                                    <img  src={set} alt="website" style={Styles.img}/>
                                    <figcaption>
                                        <h5>Pemeliharaan</h5>
                                        <p>After project completed we will maintenance your web to keep it work and minimalize error. </p>
                                    </figcaption>
                                </figure>
                            </div>
                            </Col>
                        </Row>

                    </Container>
                </Content>
                    <Look  >
                        <Row style={{padding:'35px 40px 35px 40px',textAlign:'center'}}>
                        <Col md="auto aos-all aos-animate" data-aos="zoom-in-right" data-aos-duration="1000">

                                <Link href="/">
                                    <h3 style={Styles.link}> Portofolio Kami ? </h3>
                                </Link>
                        </Col>
                        </Row>
                    </Look>
                </Fragment>
        );

    }
}



const Styles = {
    img:{
        height:'150px',
        margin:'15px',
        textAlign:'center',
    },
    icon:{
        height:'200px',
        margin:'15px',
        textAlign:'center',
    },
    icons:{
        height:'200px',
        margin:'15px 100px',
        textAlign:'center',
        alignContent:'center'
    },
    link:{
        alignItems:'center',
        textDecoration:'none',
        color:'white',
        padding:'0 450px',
    }


};
const Look=styled.div`
    { 
    margin.top:100px;
    height:auto;
    color:white;
    background-color:#116979;
    overflow:hidden;
    }

`;
const Welcome = styled.div`
    {
    background-image: url(${imagebg});
    background-repeat: no-repeat;
    background-size:cover ;
    height:500px;
    padding-top:190px;
    padding-right:180px;
    padding-bottom:190px;
    padding-left:180px;
    display:flex;
    justifyContent: "space-between";
     overflow:hidden;
    }
`;


const Head = styled.div`
    margin-top:100px;
`;
const Content = styled.div`
    background-color:#1eb2a6;
    height:auto;
    
`;
const Link=styled.a`
    width:100%;
    position:relative;
    color:#dc3545;
    textDecoration:none;
    transition:.3s all ease;
`;

const Paragraph = styled.p`
    color:white;
 
`;
const H1 = styled.h1`
     color:white;
`;
const H = styled.h6`
     color:black;
     
`;

const Stripe=styled.div`
  width: 215px;
  height: 4px;
  background: white;
  position: relative;
  bottom: 10;
  transition: left 0.5s ease;
`;



// const Hov = styled.div`
//
//        ${Link}:hover{
//          background-color: green;
//          cursor: pointer;
//        }
//
//
//
//     // ${Link}:hover  & {
//     // position:absolute;
//     // background:#dc3545;
//     // visibility:hidden;
//     // transition:.3s all ease;
//     // top:0;
//     // left:0;
//     // right:0;
//     // bottom:0;
//     // opacity:0;
//     //
//     // }
// `;
// const In = styled.div`
//     {
//     position:absolute;
//     visibility:hidden;
//     text-align:center;
//     transition:.3s all ease;
//     z-index:99;
//     left:50%;
//     top:50%;
//     transform:translate(-50%,-50%);
//     opacity:0;}
//  `;
