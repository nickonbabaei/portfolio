import React from 'react'
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';



const Home = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home