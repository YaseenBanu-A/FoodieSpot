import React from 'react';
import food1 from "../../assets/website/biryani2.png";
import food2 from "../../assets/website/biryani3.png";
import food3 from "../../assets/website/biryani.png";
import bgImg from "../../assets/vector3.png";

const Imagelist= [
    {
        id:1,
         img: food1,
    },
{         id:2,
         img: food2,
     } , {
        id:3,
        img: food3,
     },
 ];
const bgImage={
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};



const Hero = ({handleOrderPopup}) => {
    const [imageId , setImageId]= React.useState(food1);
  return (
<>
  <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 
   dark:text-white duration-200 flex items-center justify-center'>
      <div className='container pb-8 sm:pb-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
      {/* text content */}
    
      <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center 
              sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to the {" "}
                <span className="bg-clip-text  text-transparent bg-gradient-to-b from-primary to-secondary">
                  Foodie
                </span>{" "}
               spot
              </h1>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
              <div>
                <button  onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200
                 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
     
      {/* image content */}
      <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] 
      flex items-center justify-center   relative' >
    {/* main image content*/}
        <div className='flex items-center justify-center overflow-hidden h-[300px] sm:h-[450px]'>
      <img src={imageId} alt="" className='w-[300px] sm:w-[450px]   mx-auto spin ' />
        </div>
         {/* main list content*/}
         <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 
         absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>{
          Imagelist.map((item)=>(
            <img  key={item.id} src={item.img} className='max-w-[80px] h-[80px] object-contain inline-block
             duration-200 hover:scale-105' 
             onClick={()=>{
                setImageId(
                  item.id == 1 ? food1: 
                  item.id== 2 ? food2:
                  food3
               );

         }}/>
          ))


          }

        </div>
      </div>
    </div>
  </div>
       
  </div>   
       </>
) 
    
  
};

export default Hero;



