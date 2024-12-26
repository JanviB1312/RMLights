"use client";
import Link from "next/link";
import Layout from "@/layouts/layout";
import { products } from "../../data.js";
import NeedHelp from "@/components/Home/NeedHelp.js";

export default function page() {
  return (
    <Layout>
      <div className="pro-header">
        <h1 className="pro-title-header">Our Products</h1>
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
