import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from './components/About';
import Support from "./components/Support";
import Platforms  from "./components/Platforms";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      
     <Navbar/>
     <Hero/>
     <About/>
     <Support/>
     <Platforms/>
     <Pricing/>
     <Footer/>
    </div>
  );
}

export default App;
