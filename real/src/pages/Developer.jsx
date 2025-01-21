import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { devData } from "./ind";

const Developer = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 10, // Adjusted space to fit all slides better
          },
        }}
        loop={true} // Enable loop to handle last item display
        freeMode={true}
        autoplay={{
          delay: 3000, // Slide changes every 2 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[85%]" // Adjusted max width for better layout
      >
        {devData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-full lg:h-[220px] lg:w-[255px] overflow-hidden hover:scale-105 transition-all cursor-pointer">
              
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />

              {/* Flex container with justify-between */}
              <div className="absolute top-5 left-1  z-30 flex justify-between w-full pr-3 pl-1">
                {/* Orange span on the left */}
                <span className="bg-red-800 text-white text-[10px] px-2 py-1 rounded-sm">
                  {item.content} 
                </span>
                {/* Blue span on the right */}
                <span className="bg-cyan-900 text-white text-[10px] px-2 py-1 rounded-sm ">
                  {item.units} 
                </span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 opacity-1 bg-gradient-to-t from-zinc-900 to-transparent z-10" />

              {/* Content above the gradient */}
              <div className="absolute bottom-0 left-0 z-30 flex gap-3 justify-end  mt-auto mb-2 px-2">
  <h1 className="text-sm font-bold">{item.title}</h1>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Developer;
