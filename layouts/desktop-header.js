"use client";
import Link from "next/link";
import { useState } from "react";
import { ourProducts } from "../data";
import Image from "next/image";
import LogoImage from "@/public/Images/logo_rm.png";
import { RightChevron } from "@/public/svg/icon";

export default function DesktopHeader() {
  const [openProductId, setOpenProductId] = useState(null);
  const toggleSubProducts = (id) => {
    setOpenProductId(openProductId === id ? null : id);
  };

  return (
    <>
      <div className="industify_fn_header">
        <div className="header_inner" style={{ backgroundColor: "white" }}>
          <div className="menu_logo">
            <Link href="/">
              <Image
                style={{
                  width: "250px",
                  height: "300px",
                  objectFit: "contain",
                }}
                src={LogoImage}
                width={400}
                height={300}
                alt="jrbond-logo-image"
              />
            </Link>
          </div>
          <div className="menu_nav">
            <ul className="industify_fn_main_nav vert_nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/products">Our Products</Link>
                <ul className="sub-menu">
                  {ourProducts.map((item) => (
                    <li key={item.id} className="relative group">
                      <Link
                        href={`/products/${item.id}`}
                        style={{ display: "flex", gap: "2px" }}
                        className="px-4 py-2 hover:font-bold"
                      >
                        <div className=" flex-1">{item.title}</div>
                        <RightChevron />
                      </Link>
                      {item.subProducts && (
                        <ul className="absolute left-full top-0 mt-2 space-y-2 bg-white shadow-lg hidden group-hover:block">
                          {item.subProducts.map((subProduct) => (
                            <li key={subProduct.id}>
                              <Link
                                href={`/products/${item.id}/${subProduct.id}`}
                                className="block px-4 py-2 hover:font-semibold"
                              >
                                {subProduct.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link href="/about">About US</Link>
              </li>
              <li>
                <Link href="/contact">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="toll_free_lang"></div>
        </div>
      </div>
      <div className="my-class"></div>
    </>
  );
}
