import React from 'react';
import './App.css';
import Start from './components/Start';
import Education from './components/Education';
import Showcase from './components/Showcase';
import ContactMe from './components/ContactMe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  function scrollTo(id) {
    const anchor = document.querySelector('#' + id);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }


  return (
    <div className="test" >
      <div id="navbar" className="notMarked">
        <a onClick={() => scrollTo("start")} className="navButton">Start</a>

        <a onClick={() => scrollTo("education")} className="navButton">Background</a>

        <a onClick={() => scrollTo("Showcase")} className="navButton" >Projects</a>

        <a onClick={() => scrollTo("contactMe")} className="navButton">Contact</a>
      </div>
      <div className="divs notMarked bg1" id="start">
        <Start></Start>
      </div>
      <div className="divs notMarked bg2 " id="education">
        <Education></Education>
      </div>
      <div className="divs notMarked bg1 " id="Showcase" >
        <Showcase></Showcase>
      </div>
      <div className="divs notMarked bg2 " id="contactMe" >
        <ContactMe></ContactMe>
      </div>
    </div>

  );
}

export default App;
