"use client";

import { useState } from "react";
import { ourProducts } from "@/data";
import { Check } from "@/public/svg/icon";
import Image from "next/image";
import { useParams } from "next/navigation";
import RelatedProducts from "./RelatedProducts";

export default function ProductInfo() {
  const { product, category } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryData = ourProducts.find((product) => product.id === category);
  const productInfo = categoryData.subProducts.find(
    (prod) => prod.id == product
  );
  const relatedProducts = categoryData.subProducts.filter(
    ({ id }) => id != productInfo.id
  );

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productInfo.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productInfo.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderContent = (contentType, content) => {
    switch (contentType) {
      case "paragraph":
        return <div>{content}</div>;
      case "unordered_list":
        return (
          <ul className="m-0">
            {content.split("\n").map((item, index) => (
              <li key={index}>{item.replace(/^–\s*/, "")}</li>
            ))}
          </ul>
        );
      case "ordered_list":
        return (
          <ol className="m-0">
            {content.split("\n").map((item, index) => (
              <li key={index}>{item.replace(/^\(\d+\)\s*/, "")}</li>
            ))}
          </ol>
        );
      case "table":
        return (
          <div className="overflow-x-auto my-4">
            {content.title}
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  {content.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 border-b-2 w-min border-gray-300 font-semibold text-left text-nowrap leading-4 text-gray-800 tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 border-b text-gray-500 border-gray-200 "
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner product_details">
            <div className="industify_fn_leftsidebar">
              <div className="industify_fn_service_single">
                <div className="img_holder">
                  {productInfo?.images && productInfo.images.length > 1 ? (
                    <div
                      className="slider-container relative"
                      style={{ height: "350px", width: "35c0px" }}
                    >
                      <Image
                        src={productInfo.images[currentIndex]}
                        width={500}
                        height={800}
                        alt={`Product Image ${currentIndex + 1}`}
                        className="slider-image"
                        style={{ objectFit: "cover" }}
                      />

                      <button
                        onClick={handlePrevClick}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                      >
                        ❮
                      </button>
                      <button
                        onClick={handleNextClick}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                      >
                        ❯
                      </button>
                    </div>
                  ) : (
                    <Image
                      width={1000}
                      height={1000}
                      src={productInfo?.image}
                      alt="Product Image"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div
                  data-html="includes/random-service"
                  data-index="9"
                  data-count="2"
                ></div>
              </div>
            </div>

            <div className="industify_fn_rightsidebar">
              <div className="product-description flex flex-col gap-5 mb-10 px-2 sm:px-0">
                <div className=" text-5xl font-semibold text-theme-dark-cyan">
                  {productInfo?.title}
                </div>
                {productInfo.details?.map(
                  ({ label, contentType, content }, index) => {
                    return (
                      <div key={index}>
                        <div className="label font-semibold text-theme-dark-cyan text-lg">
                          {label}
                        </div>
                        {renderContent(contentType, content)}
                      </div>
                    );
                  }
                )}
              </div>

              {productInfo.features && productInfo.features.length > 0 && (
                <div className="fn_cs_check_list">
                  <div className="text-3xl font-semibold mb-5">
                    Product Features
                  </div>
                  <div className="list">
                    <ul>
                      {productInfo.features?.map((feature, index) => (
                        <li key={index}>
                          <div className="item">
                            <Check className="fn__svg text-theme-dark-cyan" />
                            <p>{feature}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          {relatedProducts && relatedProducts.length > 0 && (
            <RelatedProducts
              categoryData={categoryData}
              relatedProducts={relatedProducts}
            />
          )}
          <div>.</div>
        </div>
      </div>
    </>
  );
}
