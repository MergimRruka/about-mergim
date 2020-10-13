import React from 'react';
import '../stylesheet/Education.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Education() {

    AOS.init({
        duration: 3000
    })

    return (
        <Container>
            <Row data-aos='fade-up'>
                <main>
                    <h2 >Education</h2>
                    <div className="line">2013 - 2016 <h4>Växjö Fria Gymnasium</h4>
                Natural Sciences.</div>

                    <div className="line">2016 - 2021 <h4>The Faculty of Engineering at Lund University</h4>
                Master of Science - MS in Information and Communication Engineering Technologies.</div>

                    <h2>Experiences</h2>

                    <div className="line">Since 2015<h4>Samsung Mobile</h4>
                Designing themes, icons and wallpapers for Samsung's Theme Store for Android devices.</div>

                    <div className="line">2018 - 2019 <h4>Lunicore Student Consulting</h4>
                IT-consultant with focus on user-interface and user-experience.
                Worked in projects that needed small design changes, complete redesigns or new ideas from scratch.</div>

                    <div className="line">Since 2019<h4>Tetra Pak</h4>
                Trainee at Tetra Pak’s Student Talent Programme.
                Working as front-end developer with focus on React, typespcript/Javascript, HTML and CSS.</div>
                </main>
            </Row>
        </Container>
    )
}