import React from 'react';
import logo from "../../assets/website/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";

import DarkMode from './DarkMode';



const Navbar = ({handleOrderPopup}) =>{
  return ( <>
  <div className='shadow-xl bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <div className='container py-3 sm:py-0'>
    <div className="flex justify-between items-center">
      <div>
        <a href='#' className='flex items-center gap-2 text-xl sm:text-xl font-bold '>
     <img src={logo} alt="briyani" className='w-14'/>Foodiez Spot 
        </a>
      </div>

      <div className='flex items-center gap-4'>
        <div>
          <DarkMode/>
        </div>
    <div>
      
      <ul className='hidden sm:flex gap-4'>
        <li>
          <a href="#home" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
        </li>
        <li>
          <a href="#about"className='inline-block py-4 px-4 hover:text-primary'>About</a>
        </li>

        <li>
          <a href="#contact"className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
        </li>
       
      </ul>

    </div>
    <button onClick={()=> handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary text-white 
    px-4 py-1 rounded-full hover:scale-105 duration-300  flex items-center gap-3'>Order
      <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
    </button>

   
     </div>
    </div>
  </div>
</div>
 </>
);
};
export default Navbar;