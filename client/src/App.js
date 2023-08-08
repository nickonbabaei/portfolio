import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav />
      <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
