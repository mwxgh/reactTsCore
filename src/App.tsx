import React from 'react';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Service from './components/service/Service';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Testimonials />
    < Contact />
    <Footer />
  </>
}

export default App;
