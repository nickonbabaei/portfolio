import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
