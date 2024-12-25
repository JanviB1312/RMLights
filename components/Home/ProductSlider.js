"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { products } from "../../data";

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
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className="product-slider"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <img
              src={product.src}
              alt={product.alt}
              className="product-image"
            />
            <div className="product-overlay">
              <h4 className="product-title">{product.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
