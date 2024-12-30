"use client";
import Link from "next/link";
import Layout from "@/layouts/layout";
import { products } from "../../data.js";
import NeedHelp from "@/components/Home/NeedHelp.js";

export default function page() {
  return (
    <Layout>
      <div
        className="fn_cs_hero_header_contact"
        style={{ marginBottom: "30px" }}
      >
        <div className="content_holder max800">
          <div className="title_holder">
            <h3>Our Products</h3>
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
      <div className="pro-container">
        {products.map((product, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`pro-product ${
                isImageLeft ? "pro-image-left" : "pro-image-right"
              }`}
            >
              <div className="pro-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="pro-image"
                />
              </div>

              <div className="pro-text-container">
                <h2 className="pro-title">{product.title}</h2>
                <p className="pro-description">{product.description}</p>
                <ul className="pro-bullet-list">
                  {product.bullets.map((bullet, idx) => (
                    <li key={idx} className="pro-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="pro-button">Get a Free Estimate</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <NeedHelp />
    </Layout>
  );
}
