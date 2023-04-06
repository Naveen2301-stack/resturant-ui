import NavBar from "./Components/Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import CardSection1 from "./Components/CardSection1";
import Footer from "./Components/Footer";
import CardSection2 from "./Components/CardSection2";
import UpperFooter from "./Components/UpperFooter";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

function App() {
  return (
    <div className="bdy">
      <BrowserRouter>
        <NavBar />
        <HeroSection />
        <CardSection1 />
        <CardSection2 />
        <Section3 />
       <Section4 />
      </BrowserRouter>
      <UpperFooter />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
