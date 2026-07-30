import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DevOpsJourney from './components/DevOpsJourney';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DevOpsJourney />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
