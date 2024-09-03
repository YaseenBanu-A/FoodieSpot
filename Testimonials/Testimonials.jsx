import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 4,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-300 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            What our customers say
          </p>
          <h1 className="text-3xl font-bold text-gray-800  dark:text-gray-100">
            Testimonial
          </h1>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,
          </p>
        </div>
        <div className="relative">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="px-4 py-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 rounded-2xl bg-white dark:bg-gray-800 relative">
                  <img
                    className="rounded-full block mx-auto w-20 h-20 border-2 border-gray-300"
                    src={data.img}
                    alt={data.name}
                  />
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    "{data.text}"
                  </p>
                  <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {data.name}
                  </h1>
                  <p className="text-black/20 dark:text-white text-3xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
