import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Banner from './components/Banner/banner';
import Appstore from './components/Appstore/appstore';
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from '../Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };




  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <><div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
     <Navbar handleOrderPopup={handleOrderPopup} />
     <Hero  handleOrderPopup={handleOrderPopup} />
   <Services  />
<Banner  handleOrderPopup={handleOrderPopup}/>
<Appstore/>
<Testimonials/>
<Footer/>
<Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>


   </div>
   </>
  )
}


export default App;