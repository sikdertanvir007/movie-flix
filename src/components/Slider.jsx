import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // ✅ import Autoplay
import inceptionImg from "../assets/Inception.jpg";
import avatarImg from "../assets/avatar.jpeg";
import duneImg from "../assets/Dune.jpg"

const Slider = () => {
  return (
    <div className="relative z-0">
      <div className="px-3 md:px-8 lg:px-10 max-w-full md:max-w-4xl lg:max-w-6xl mx-auto mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,     // ⏱️ delay in milliseconds
            disableOnInteraction: false, // Keeps autoplay after user interaction
          }}
          modules={[Navigation, Pagination, Autoplay]} // ✅ include Autoplay
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-2xl shadow-lg relative"
              style={{
                backgroundImage: `url(${inceptionImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            > <div className='absolute bottom-1 left-0'>
            <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-orange-300'>Inception(2010)</p>
          </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-2xl shadow-lg relative"
              style={{
                backgroundImage: `url(${avatarImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ><div className='absolute bottom-1 left-0'>
            <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-orange-500'>Avatar(2009)</p>
          </div></div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
          <div
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-2xl shadow-lg relative"
              style={{
                backgroundImage: `url(${duneImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ><div className='absolute bottom-1 left-0'>
            <p className='text-2xl md:text-3xl lg:text-5xl font-bold text-white'>Dune: Part 2(2024)</p>
          </div></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
