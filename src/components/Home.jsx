import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroimg1 from "../assets/heroimg1.png";
import heroimg2 from "../assets/heroimg2.png";

const slides = [heroimg1, heroimg2];

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 max-w-2xl text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Satcom & Broadcast Integration Made Easy.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  SALKATECH works in conjunction with its customers to provide mission-critical 
                  connectivity solutions. Our expertise in satellite and broadcast engineering 
                  enables us to deliver highly secure, reliable, and affordable services.
                </p>
                <Link
                  to="/get-started"
                  className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
