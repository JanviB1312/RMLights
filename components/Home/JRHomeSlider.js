"use client";
import { ourProducts } from "@/data";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// register Swiper custom elements
register();

// Images imported
const slider1 = "/Images/slider/epoxy-adhesive.jpg";
const slider2 = "/img/slider/epoxy-grout.jpg";
const slider3 = "/img/slider/grout.jpg";
const slider4 = "/img/slider/4.jpg";
const slider5 = "/img/slider/5.jpg";

export default function JRHomeSlider() {
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
        {/* <!-- Alpha Slider: navigation --> */}
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
        {/* <!-- /Alpha Slider: navigation --> */}

        {/* <!-- Alpha Slider: pagination --> */}
        <div className="swiper-pagination"></div>
        {/* <!-- /Alpha Slider: pagination --> */}

        {/* <!-- Alpha Slider: wrapper --> */}
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
          {ourProducts
            .slice(0, 3)
            .map(({ title, description, sliderImage }) => {
              return (
                <SwiperSlide key={title}>
                  <div className="item">
                    <div
                      className="img_holder"
                      style={{ backgroundImage: `url(${sliderImage})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                    <div className="title_holder">
                      <div className="inner">
                        <div className="in">
                          {/* <p>
                          <span>Industry</span>
                        </p> */}
                          <h3>
                            <span>{title}</span>
                          </h3>
                          <div className="desc">
                            <span style={{ marginTop: "10px" }}>
                              {description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        {/* <!-- Alpha Slider: wrapper --> */}
      </div>
      {/* <!-- /Alpha Slider --> */}
    </>
  );
}
