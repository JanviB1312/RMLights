"use client";
import { sliderData } from "@/data";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// register Swiper custom elements
register();

export default function HomeSlider() {
  return (
    <>
      <div
        className="industify_slider_alpha"
        data-desc-show="yes"
        data-category-show="yes"
        data-nav-types="square"
        data-autoplay-switch="enabled"
        data-autoplay-time="8000"
        data-effect="cards"
        data-progress="enabled"
        data-box-pos="cr"
        data-img-effect="enabled"
        data-text-effect="enabled"
      >
        <div className="owl_control">
          <div className="fn_prev">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
          <div className="fn_next">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".fn_prev",
            nextEl: ".fn_next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="custom-class"
        >
          {sliderData.map(({ title, image }) => {
            return (
              <SwiperSlide key={title}>
                <div className="item">
                  <div
                    className="img_holder"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="f-slider-one-data">
                    <h1>{title}</h1>
                    <div className="social-media-icons">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Images/slider/instagramlogo.png"
                          alt="Facebook"
                          className="social-icon"
                        />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Images/slider/instagramlogo.png"
                          alt="Twitter"
                          className="social-icon"
                        />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="Images/slider/instagramlogo.png"
                          alt="LinkedIn"
                          className="social-icon"
                        />
                      </a>
                    </div>
                    <button className="free-estimate-btn">
                      Get a Free Estimate
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
