import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from ".";
import { useStateContext } from "../../Context/StateContext"; // Make sure to import useStateContext

const Slider = () => {
  const { darkMode } = useStateContext(); // Get darkMode value from context

  return (
    <div className="flex items-center justify-center flex-col h-full">
      <Swiper
        breakpoints={{
            340: {
                slidesPerView: 1,
                spaceBetween: 15, // Adjust space for smaller screens
              },
              700: {
                slidesPerView: 2,  // Show 2 slides per view for medium screens
                spaceBetween: 20,  // Reduce space between slides
              },1000: {
                slidesPerView: 3,  // Show 2 slides per view for medium screens
                spaceBetween: 10,  // Reduce space between slides
              },
              1024: {
                slidesPerView: 3,  // Show 3 slides per view for large screens
                spaceBetween: 40,  // Add more space between slides
              },
              1280: {
                slidesPerView: 4,  // Show 4 slides per view for extra-large screens
                spaceBetween: 50,  // Add more space between slides
              },
        }}
        loop={true} // Enable loop to handle last item display
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[85%]" // Adjusted max width for better layout
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[450px] w-[100px]lg:h-[450px] lg:w-[300px] sm:h-[400px] sm:w-full overflow-hidden hover:scale-105 transition-all cursor-pointer">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              {/* Gradient Overlay starting from bottom */}
              <div className="absolute inset-0 opacity-1 bg-gradient-to-t from-zinc-900 to-80% hover:from-black hover:to-80% z-10" />
              {/* Content above the gradient */}
              <div className="relative z-20 flex flex-col gap-3 mt-auto">
                <h1 className="text-xl lg:text-2xl overflow-hidden whitespace-nowrap text-ellipsis">
                  {item.title}
                </h1>
                <p className="lg:text-[18px]">{item.content}</p>
                <p className="lg:text-[18px]">{item.units}</p>
              </div>
              {/* Arrow Icon */}
              <RxArrowTopRight className="absolute bottom-5 right-2 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 z-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style the pagination dynamically based on darkMode */}
      <style >{`
        .swiper-pagination-bullet {
          background-color: ${darkMode ? "#fff" : "#000"}; /* White in dark mode, black in light mode */
        }
        .swiper-pagination-bullet-active {
          background-color: ${darkMode ? "#4b9cd3" : "#ff6347"}; /* Active color */
        }
      `}</style>
    </div>
  );
};

export default Slider;
