import React from 'react';
import '../stylesheet/ContactMe.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedin from '../imgs/linkedin.png';
import email from '../imgs/email.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Shape from './Shape';


export default function ContactMe() {

    AOS.init({
        duration: 3000
    })

    return (
        <Container className="mainDiv">
            <Row className="padding">
                <Col md={{ span: 1, offset: 3 }} sm={{ span: 1, offset: 3 }} xs={{ span: 9, offset: 3 }} data-aos='fade-right' data-aos-delay="1100">
                    <Shape size={35} color="blue" type="square" rotate="75" ></Shape>
                </Col>
                <Col md={{ span: 4, offset: 8 }} sm={{ span: 4, offset: 8 }} xs={{ span: 4, offset: 8 }} data-aos='fade-left' data-aos-delay="1100">
                    <Shape size={85} color="purple" type="circle" rotate="65" ></Shape>
                </Col>
            </Row>
            <Row>
                <Col md="12" sm="12" xs="12" data-aos='fade-right' data-aos-delay="1400">
                    <Shape size={55} color="blue" type="circle" rotate="95"></Shape>
                </Col>
                <Col md={{ span: 4, offset: 8 }} sm={{ span: 4, offset: 8 }} xs={{ span: 4, offset: 8 }} data-aos='fade-left' data-aos-delay="1000">
                    <Shape size={55} color="blue" type="square" ></Shape>
                </Col>
            </Row>

            <Row data-aos='fade-up' >
                <Col md="12" sm="12" className="inTouchText fontsizeQue">
                    
                        Do you want to get in touch with me?
                    
                </Col>
                <Col md="12" sm="12" className="inTouchText fontsizeUnd">
                 
                        Feel free to reach out through email or LinkedIn:
                    
                </Col>
            </Row>
            <Row data-aos='fade-up' >
                <Col md={{ span: 1, offset: 5 }} sm={{ span: 2, offset: 4 }} xs="6" className="inTouchText" >
                    <a href="mailto:mergimrruka@gmail.com"><Image className="icons" src={email} /></a>
                </Col>
                <Col md={{ span: 1 }} sm={{ span: 2 }} xs="6" className="inTouchText">
                    <a href="https://www.linkedin.com/in/mergim-rruka/" ><Image className="icons" src={linkedin} /></a>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 4 }} sm="4" xs="3" data-aos='fade-left' data-aos-delay="1000" >
                    <Shape size={36} color="purple" type="square" rotate="20" ></Shape>
                </Col>
                <Col md="6" sm="1" xs="1" />
                <Col md={{ span: 1, offset: 7 }} sm={{ span: 5, offset: 7 }} xs="3" data-aos='fade-right' data-aos-delay="1300">
                    <Shape size={50} color="none" type="circle" ></Shape>
                </Col>
                <Col md={{ span: 1, offset: 7 }} sm={{ span: 5, offset: 7 }} xs="3" data-aos='fade-right' data-aos-delay="1100">
                    <Shape size={100} color="purple" type="circle" rotate="210" ></Shape>
                </Col>
                <Col md="6" sm="1" xs="1" />
            </Row>
            <Row>
                <Col md="12" sm="12" xs="12" >
                    <Shape size={60} color="none" type="circle" rotate="86" ></Shape>
                </Col>
                <Col md={{ span: 3, offset: 9 }} sm={{ span: 3, offset: 9 }} xs={{ span: 3, offset: 9 }} data-aos='fade-left'>
                    <Shape size={20} color="blue" type="square" rotate="86" ></Shape>
                </Col>

            </Row>

        </Container>
    )
}