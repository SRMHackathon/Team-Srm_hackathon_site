import './App.css';
import Aboutus from './components/aboutus';
import OurDomains from '/.components/ourdomains';
import Events from './components/events';
import Landing_page from './components/landing-page';
import Index from './components/testimonials';
import logo from './assets/logo.svg';
import Gallery from "./components/gallery";
function App() {
  return (
    <div className="App">
         <Landing_page/>
         <Aboutus/>
         <Events/>
         <OurDomains/>
         <Gallery/>
         <Index/>
    </div>
  );
}

export default App;
