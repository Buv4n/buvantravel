// src/components/BannerSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Explore Kazakhstan",
    subtitle: "Unhurried & Meaningful Journeys",
    image: "/frontend/src/assets/Images/kazak2.jpg",
  },
  {
    id: 2,
    title: "Spiritual Travel Experiences",
    subtitle: "Curated Tours Across Asia",
    image: "../assets/Images/aisan-temple.jpg",
  },
  {
    id: 3,
    title: "Travel with Comfort & Care",
    subtitle: "Flights, Hotels & Local Transport Included",
    image: "../../../frontend/src/assets/Images/dubai.jpg",
  },
];

export default function BannerSlider() {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center float-left">
                <div className="content-wrapper mx-auto px-6 text-white ">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
