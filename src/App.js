


import NavBar from './Components/Header';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='bdy'>
    <BrowserRouter>
  <NavBar />
  <HeroSection />
  </BrowserRouter>
  <footer>
    <Footer />
  </footer>
    </div>
  );
}

export default App;
