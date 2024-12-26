"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { homeProducts } from "../../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = () => {
  return (
    <div className="product-slider-container">
      <div className="heading-style">
        <h1>Our Products</h1>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1} // Default to 1 slide for mobile view
        spaceBetween={10} // Adjust spacing between slides
        loop={true}
        breakpoints={{
          // For screens larger than 768px, show 3 images
          768: {
            slidesPerView: 3,
          },
          // For smaller screens, show 1 image
          0: {
            slidesPerView: 1,
          },
        }}
        className="product-slider"
      >
        {homeProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-slide-container">
              <img
                src={product.src}
                alt={product.alt}
                className="product-image"
              />
              <div className="product-overlay">
                <h4 className="product-title">{product.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
