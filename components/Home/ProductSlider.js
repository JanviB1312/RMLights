"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { homeProducts } from "../../data";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = () => {
  return (
    <div className="product-slider-container" style={{ marginTop: "30px" }}>
      <div className="header-with-button">
        <div>
          <h1 className="heading">
            <span className="heading-style">Our</span>
            <span className="heading-style2">Products</span>
          </h1>
        </div>
        <Link href="/products">
          <button className="view-products-button">View All Products</button>
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="product-slider"
        style={{ maxWidth: "1250px" }}
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
