import Link from "next/link";
import React from "react";

function RelatedProducts({ relatedProducts, categoryData }) {
  return (
    <div className="w-full min-h-56 related_products">
      <div className="m-0 p-0 text-6xl text-[#041230] font-light pb-3.5 mb-8">
        Related Products
      </div>
      <div className="industify_fn_leftsidebar">
        <ul className="industify_fn_service_list grid grid-cols-2 gap-8">
          {relatedProducts.map((item) => {
            return (
              <div className="" key={item.id}>
                <div className="item">
                  <div className="item_in">
                    <div className="img_holder">
                      <div
                        className="img_abs"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                      <Link
                        href={`/products/${categoryData.id}/${item.id}`}
                      ></Link>
                    </div>
                    <div className="title">
                      <h3>
                        <Link href={`/products/${categoryData.id}/${item.id}`}>
                          {item.title.toUpperCase()}
                        </Link>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="read_more">
                      <Link href={`/products/${categoryData.id}/${item.id}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      {/* Products List Component */}
    </div>
  );
}

export default RelatedProducts;
