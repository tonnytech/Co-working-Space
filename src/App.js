import './App.css';
import Nav from './components/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Membership from './components/membership/Membership';
import Footer from './components/footer/Footer';
import Map from './components/map/Map';

function App() {
  return (
    <>
    <Nav />
    <Hero />
    <About />
    <Services />
    <Membership />
    <Map />
    <Footer />
    </>
  );
}

export default App;
