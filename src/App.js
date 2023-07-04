import './App.css';
import Hero from './components/Hero/Hero.jsx'
import Benefits from './components/Benefits/Benefits';
import Navbar from './components/Navbar/Navbar';
import FAQ from './components/FAQ/FAQ';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Benefits />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
