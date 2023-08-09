import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {Route, Routers} from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <Routers>
          <Route />
        </Routers> */}
      </div>
    </>
  );
}

export default App;
