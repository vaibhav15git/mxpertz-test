
import './App.css';
import Navbar from './components/navbar/Navbar';

import HeroSection from './components/hero section/HeroSection';
import OurStory from './components/our story/OurStory';
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/testimonial/Testimonial';
import News from './components/news/News';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <OurStory/>
     <Pricing/>
     <Testimonial/>
     <News/>
     <Footer/>
    </div>
  );
}

export default App;
