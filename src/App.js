import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import FirstScreen from './screens/FirstScreen';
import FormScreen from './screens/FormScreen'
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import BasicAccordion from './components/questions/Akordion';
import { useEffect, useState } from 'react';

function App() {

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return <>
  <div class="wrap">
  <Navbar scrolled={scrolled}/>
  <FirstScreen scrolled={scrolled}/>
  <FormScreen/>
  <SecondScreen/>
  <ThirdScreen/>
  <BasicAccordion/>
  </div>
  </>
}

export default App;
