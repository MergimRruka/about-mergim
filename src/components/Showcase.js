import React from 'react';
import '../stylesheet/Showcase.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import themes from '../imgs/theme2.png';
import calc from '../imgs/calc2.png';
import dotwhere from '../imgs/dotwhere.png';
import hommeSec from '../imgs/homeSecurity.png';
import position from '../imgs/position.svg';

export default function Showcase() {

    AOS.init({
        duration: 3000
    })

    return (
        <Container data-aos='fade-right'>
            <Row className="padding">
                <Col  sm="12" md="12" lg={{ span: 4,order: 2 }} data-aos='fade-right' >
                    <h2 className="underline">Galaxy Themes</h2>
                    <p className="atText"><Image className="atIcon"  src={position} />Samsung Mobile</p>
                    <p className="p-under">Creating themes, wallpapers, icons and always-on-displays for Samsung's theme store. Eleven themes available, downloaded more than 300 000 times globally.
                    If you have a Samsung smartphone, make sure to look up my designs in the theme store by searching my name.
                    </p>
                </Col>
                <Col sm="12" md="12" lg={{ span: 8, order: 1 }} data-aos='fade-right' >
                    <Image className="themes" src={themes} />
                </Col>
            </Row>
            <Row className="padding">
                <Col sm="12" md="12"  lg="4" data-aos='fade-left'>
                    <h2 className="underline">DotWhere</h2>
                    <p className="atText"><Image className="atIcon"  src={position} />LTH</p>
                    <p className="p-under">Interactive workout application consisting of a GPS-based map-view and a couple of exercises. The purpose of DotWhere was to get users to do workouts 
                    outdoors and based on the user’s location get suggestions on what exercises can be done in the surrounding environment. 
                    User studies and testing were done during the process. The application was created for Android devices. 
                    </p>
                </Col>
                <Col sm="12" md="12"  lg="8" data-aos='fade-left'>
                    <Image className="themes" src={dotwhere} />
                </Col>
            </Row>
            <Row className="padding">
                <Col sm="12" md="12" lg={{span: 4, order: 2 }} data-aos='fade-right' >
                    <h2 className="underline">Hewlett-Packard Calculator</h2>
                    <p className="atText"><Image className="atIcon"  src={position} />LTH</p>
                    <p className="p-under">A Hewlett-Packard calculator written in Java. It solves mathematical expressions in postfix form, also known as reverse polish notation. 
                    Not an android application, the design of the application only demonstrated how it could look like on a phone.
                    </p>
                </Col>
                <Col  sm="12" md="12" lg={{ span: 8, order: 1 }} data-aos='fade-right' >
                    <Image className="themes" src={calc} />
                </Col>
            </Row>

            <Row className="padding">
                <Col sm="12" md="12"  lg="5" data-aos='fade-left'>
                    <h2 className="underline">Home Security</h2>
                    <p className="atText"><Image className="atIcon"  src={position} />LTH</p>
                    <p className="p-under">Prototype of a home security system created in InVision. The idea was that the system would be used with an iPad for 
                    locking the whole house or different parts of it and share lock codes with friends and guests to use when visiting. 
                    The design process included user studies and user testing.
                    </p>
                </Col>
                <Col sm="12" md="12"  lg="7" data-aos='fade-left'>
                    <Image className="themes" src={hommeSec} />
                </Col>
            </Row>
        </Container>
    )
}