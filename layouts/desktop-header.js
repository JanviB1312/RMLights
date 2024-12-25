"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";
import { ourProducts } from "../data";
import Image from "next/image";
import LogoImage from "@/public/Images/logo-transparent2.png";
import { Arrow_r, DownChevron, RightChevron } from "@/public/svg/icon";

export default function DesktopHeader() {
  const [openProductId, setOpenProductId] = useState(null); // Manage which product's subProducts are visible
  const toggleSubProducts = (id) => {
    setOpenProductId(openProductId === id ? null : id); // Toggle visibility of subProducts
  };

  return (
    <>
      <div className="industify_fn_header">
        <div className="header_inner">
          <div className="menu_logo">
            <Link href="/">
              <Image
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
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
                  {/* {ourProducts.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={`/products/${item.id}`}>{item.title}</Link>
                      </li>
                    );
                  })} */}
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
              {/* <li className="menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/404">404 Page</Link>
                  </li>
                  <li>
                    <Link href="/principles">Our Principles</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="blog/blogFullPage">Blog Full</Link>
                  </li>
                  <li>
                    <Link href="/protected">Protected Page</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/about">About US</Link>
              </li>
              <li>
                <Link href="/contact">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="toll_free_lang">
            {/* <div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div> */}
            {/* <div className={isActive ? "industify_fn_moving_lang opened" : "industify_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                                <li onClick={() => setSelect("Spa")}><span>Spa</span></li>
                                <li onClick={() => setSelect("Rus")}><span>Rus</span></li>
                            </ul>
                        </div> */}
            {/* <div onClick={toggleTrueFalse} className={`nice-select ${isToggled ? "open" : ""}`}>
                            <span className="current">{isSelect}</span>
                            <ul className="list">
                                <li onClick={() => setSelect("ENG")} className={`option ${isSelect == "ENG" && "selected focus"}`}>ENG</li>
                                <li onClick={() => setSelect("SPA")} className={`option ${isSelect == "SPA" && "selected focus"}`}>SPA</li>
                                <li onClick={() => setSelect("RUS")} className={`option ${isSelect == "RUS" && "selected focus"}`}>RUS</li>
                            </ul>
                        </div>
 */}
            {/* <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                <div className="img_holder" style={{ backgroundImage: `url(${background})` }}></div>
                                <p><span>Toll Free:</span> 1-800-987-6543</p>
                            </div>
                        </div> */}
          </div>
        </div>
        {/* <!-- /Header: Bottom Panel --> */}
      </div>
      <div className="my-class"></div>
    </>
  );
}
