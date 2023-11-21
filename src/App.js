import './App.css';
import Aboutus from './components/aboutus';
import OurDomains from './components/ourdomains';
import Events from './components/events';
import Landing_page from './components/landing-page';
import Testimonials from './components/testimonials';
// import Gallery from "./components/gallery";
import Gallery from './components/gallery.jsx';
function App() {
  return (
    <div className="App">
         <Landing_page/>
         <Aboutus/>
         <Events/>
         <OurDomains/>
         <Gallery/>
         {/* <Testimonials/> */}
    </div>
  );
}

export default App;
