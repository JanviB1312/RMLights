"use client";
import React, { useEffect } from "react";
import { homeProducts } from "../../data";
import Link from "next/link";

const ProductSlider = () => {
  useEffect(() => {
    const COMPONENT_SELECTOR = ".carousel__wrapper";
    const CONTENT_SELECTOR = ".carousel__content";

    const components = document.querySelectorAll(COMPONENT_SELECTOR);

    components.forEach((component) => {
      const content = component.querySelector(CONTENT_SELECTOR);
      const nextButton = component.querySelector(".arrow-next");
      const prevButton = component.querySelector(".arrow-prev");

      // Ensure the content is scrollable
      const toggleArrows = () => {
        const maxScrollWidth = content.scrollWidth - content.clientWidth;
        // Check if we need to disable buttons based on scroll position
        if (content.scrollLeft === 0) {
          prevButton.classList.add("disabled");
        } else {
          prevButton.classList.remove("disabled");
        }

        if (content.scrollLeft === maxScrollWidth) {
          nextButton.classList.add("disabled");
        } else {
          nextButton.classList.remove("disabled");
        }
      };

      // Add event listener for scroll to toggle arrow buttons
      content.addEventListener("scroll", toggleArrows);

      // Event listeners for next and previous buttons
      if (nextButton) {
        nextButton.addEventListener("click", (event) => {
          event.preventDefault();
          content.scrollBy({
            left: content.clientWidth,
            behavior: "smooth",
          });
        });
      }

      if (prevButton) {
        prevButton.addEventListener("click", (event) => {
          event.preventDefault();
          content.scrollBy({
            left: -content.clientWidth,
            behavior: "smooth",
          });
        });
      }

      // Initialize the arrow buttons state on load
      toggleArrows();
    });
  }, []);

  return (
    <div className="product-slider-container">
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
      <div className="carousel">
        <div className="carousel__wrapper">
          <div className="carousel__header">
            <div className="carousel__controls">
              <button className="carousel__arrow disabled arrow-prev">
                <span className="arrow-icon">←</span>
              </button>
              <button className="carousel__arrow arrow-next">
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
          <ul className="carousel__content">
            {homeProducts.map((product, index) => (
              <li key={index} className="carousel__item">
                <a href="#">
                  <img
                    className="carousel__item__image"
                    src={product.src}
                    alt={product.alt}
                  />
                  <div className="carousel__description">
                    <h3 className="carousel__title">{product.title}</h3>
                    {/*  <span className="carousel__subtitle">
                      Some subtitle goes here
                    </span> */}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
