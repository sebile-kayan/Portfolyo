import logo from './logo.svg';
import './App.css';
import PortfolioNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
