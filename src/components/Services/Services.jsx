import React from 'react';
import Img2 from "../../assets/website/biryani2.png";
import Img3 from "../../assets/website/biryani2.png";


import Img1 from "../../assets/website/biryani2.png";



const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: " Veg Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img3,
    name: "Mutton Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];

const Services = () => {
  return (
    <>

      <div  className="py-10">
        <div className="container">
           {/* text section*/}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl  dark:text-white  font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          {/* card section*/}
<div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
  {
    ServicesData.map(({id,img,name,description})=>{
      return (
        <div key={id}    data-aos="zoom-in"
        data-aos-duration="400" className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800
         hover:bg-primary  dark:hover:bg-primary dark:text-white duration-300  shadow-xl '  >
          <div className='h-[100px] '>
             <img src={img} className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105
              group-hover:rotate-6 ' /></div>
          <div className='p-4 items-center'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <p className='text-gray-500 text-sm   duration-300 group-hover:text-white line-clamp-2'>
              {description}
            </p>
          </div>
        </div>
      )
    })
  }
</div>
          </div>
          </div>
          </div>
    
    
    </>
  )
}

export default Services;