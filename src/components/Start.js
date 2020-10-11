import React from 'react';
import '../stylesheet/Start.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from '../imgs/me.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Shape from './Shape';

export default function Start() {

    AOS.init({
        duration: 3000
    })

    return (
        <Container data-aos='fade-up' data-aos-easing="ease-in-out" className="mainDiv">
            <Row>
                <Col md={{ span: 1, offset: 2}} sm={{ span: 1, offset: 2}}  xs={{ span: 1, offset: 2}}  data-aos="zoom-out" data-aos-delay="1500">
                    <Shape size={60} color="purple" type="circle" ></Shape>
                </Col>
                <Col md="6" sm="12" className="Hi"> Hi there! </Col>
                <Col md="3" className='d-md-block d-none' data-aos="zoom-out" data-aos-delay="1500">
                    <Shape size={80} color="purple" type="square" rotate="90" ></Shape>
                </Col>
            </Row>
            <Row>
                <Col md="4" data-aos='fade-right' data-aos-delay="1100" className='d-md-block d-none'>
                    <Shape size={35} type="square" color="blue" rotate="20" ></Shape>
                </Col>
                <Col md="4" sm="12" className="Name">My name is Mergim Rruka</Col>
            </Row>
            <Row >
                <Col md="3" className='d-md-block d-none' />
                <Col md="4" sm="11" className="MeDiv" data-aos='fade-up'>
                    <Image className="Me border-gradient border-gradient-purple" src={me} />
                </Col>
                <Col md={{ span: 1, offset: 2}}  sm={{ span: 3, offset: 9}} xs={{ span: 3, offset: 9}}  data-aos='zoom-in' data-aos-delay="1000" >
                    <Shape size={80} type="circle" color="blue" rotate="180" ></Shape>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" data-aos='fade-up' data-aos-delay="3000" className="scrollText">
                    Scroll down for more
                </Col>
            </Row>
            <Row >
                <Col md="4" sm="12" >
                    <Shape size={10} type="circle" color="purple" rotate="70" ></Shape>
                </Col>
                <Col md={{ span: 1, offset: 3}} sm={{ span: 3, offset: 9}} xs={{ span: 2, offset: 10}}  >
                    <Shape size={15} type="square" color="blue" rotate="65" ></Shape>
                </Col>
            </Row>
        </Container>
    )
}