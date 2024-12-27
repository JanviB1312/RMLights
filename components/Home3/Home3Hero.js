"use client";
import { useState } from "react";
const headerBG = "img/hero.jpg";

export default function Home3Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_hero_header">
        <div className="container">
          <div className="content_holder max800">
            <div className="title_holder">
              <h3>About Us</h3>
              <p>
                At RM Lights, we take immense pride in being a Proudly Made in
                India LED lighting solutions provider. With a commitment to
                quality, innovation, and sustainability, we deliver lighting
                products designed to elevate every space they illuminate. Our
                mission is to redefine the standards of the lighting industry by
                offering cutting-edge solutions that blend efficiency with
                exceptional design. Each product is crafted to meet the highest
                benchmarks of performance, ensuring satisfaction from the moment
                of installation and beyond. RM Lights is dedicated to supporting
                India&apos;s vision of self-reliance and growth through our
                focus on local manufacturing. By emphasizing integrity,
                customer-centricity, and technological advancement, we continue
                to illuminate lives and inspire brighter futures.
              </p>
            </div>
          </div>
        </div>
        <div className="bg_holder">
          <div
            className="o_img"
            style={{
              backgroundImage: `url(/Images/bg2.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="o_color"></div>
        </div>
      </div>
    </>
  );
}
