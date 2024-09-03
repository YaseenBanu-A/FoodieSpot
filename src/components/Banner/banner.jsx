import React from 'react';
import img from "../../assets/website/biryani_cover.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const banner = ({handleOrderPopup}) => {
  return (
    <>
    <div className='min-w-[700px]'>
        <div  data-aos="slide-up"
            data-aos-duration="300" >
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
{/*image section */}
<div >
    <img src={img} className=' max-w-[380px]    mt-20 mx-auto rounded-3xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'/>
</div>
 
{/* text section  */}


<div className='flex flex-col justify-center gap-6 sm:pt-0' >
  <h1 className=' text-3xl sm:text-4xl font-bold  dark:text-white  py-5'>
    Lorem ipsum dolor 
  </h1>
  <p className='tracking-wide leading-5 text-sm text-gray-500  '>
 Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
 Maiores temporibus a assumenda in sequi similique sunt <br/>
 minus? Animi, necessitatibus nulla.<br/>
 <br/>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Et quam provident laborum, nostrum necessitatibus quos ut velit quidem molestiae! Aut!
  </p>

  {/* elements section */}
  
  <div className=' flex gap-6'>
    <div>
      <GrSecure className=" rounded-full text-4xl h-20 w-20 shadow-sm p-5
       bg-violet-100 dark:bg-violet-400"/>
    </div>

    <div>
      <IoFastFood className=" rounded-full text-4xl h-20 w-20 shadow-sm p-5
       bg-orange-100 dark:bg-orange-400"/>
    </div>

    <div>
      <GiFoodTruck className=" rounded-full text-4xl h-20 w-20 shadow-sm p-5
       bg-green-100 dark:bg-green-400"/>
    </div>

  </div>
<div className='py-12'>
  <button  onClick={handleOrderPopup} className='rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300  text-white px-6 py-3 '> 
    Order now</button>
</div>


</div></div>
            </div>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default banner;