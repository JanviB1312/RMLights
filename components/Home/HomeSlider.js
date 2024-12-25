"use client";
import { sliderData } from "@/data";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function HomeSlider() {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      prevEl: ".swiper-nav-prev",
      nextEl: ".swiper-nav-next",
    },
  };
  return (
    <>
      <section
        className="featured-slider-one"
        style={{ background: "grey", minHeight: "100vh" }}
      >
        <div className="containe">
          <Swiper
            {...swiperOptions}
            className="swiper-container ro f-slider-one"
          >
            {sliderData.map((item, key) => (
              <SwiperSlide key={`hs-slide-${key}`} className="swiper-slide">
                <div className="f-slider-layer">
                  <img src={item.image} alt={item.title} />
                  <div className="f-slider-one-data">
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
