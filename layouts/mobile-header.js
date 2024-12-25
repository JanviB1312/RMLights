"use client";
// import 'mmenujs/style';
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";
import { ourProducts } from "@/data";
import Image from "next/image";
import LogoImage from "@/public/Images/logo-transparent2.png";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);
  const [subActive, setSubActive] = useState({ status: false, key: "" });

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const handleSubToggle = (key) => {
    if (subActive.key === key) {
      setSubActive({ status: false, key: "" });
    } else {
      setSubActive({ status: true, key });
    }
  };

  return (
    <>
      <div className="industify_fn_mobilemenu_wrap">
        {/* <div className="industify_fn_toppanel">
          <div className="left_panel">
            <div className="info">
              <Link href="/mailto:trendycoder.com@gmail.com">
                trendycoder.com@gmail.com
              </Link>
            </div>
            <div className="industify_fn_social_list">
              <ul>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Facebook className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Twitter className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Instagram className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Vk className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Linkedin className="fn__svg" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <!-- LOGO & HAMBURGER --> */}
        <div className="logo_hamb">
          <div className="in">
            <div className="menu_logo">
              <Link href="/">
                <Image
                  className="invert 10 object-cover"
                  style={{ height: "64px" }}
                  height={200}
                  width={400}
                  src={LogoImage}
                  alt="Industry Template"
                />
              </Link>
            </div>
            <div
              onClick={MobileMenuTrueFalse}
              className={
                !isMobileMenu
                  ? "hamburger hamburger--collapse-r"
                  : "hamburger hamburger--collapse-r is-active"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /LOGO & HAMBURGER --> */}
        {/* <!-- MOBILE DROPDOWN MENU --> */}
        <div
          className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
        >
          <div>
            <nav>
              <ul className="mmenu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`has-arrow ${
                      isActive.key == 2 ? "mm-active" : ""
                    } `}
                    onClick={() => handleToggle(2)}
                  >
                    Our Products
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    {ourProducts.map((item) => (
                      <li key={item.id}>
                        <Link
                          href="#"
                          className={`has-arrow ${
                            subActive.key === item.id ? "mm-active" : ""
                          }`}
                          onClick={() => handleSubToggle(item.id)}
                        >
                          {item.title}
                        </Link>
                        <ul
                          className="px-2 text-sm"
                          style={{
                            display: `${
                              subActive.key === item.id ? "block" : "none"
                            }`,
                          }}
                        >
                          {item.subProducts?.map((subProduct) => (
                            <li key={subProduct.id}>
                              <Link
                                href={`/products/${item.id}/${subProduct.id}`}
                              >
                                {subProduct.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- /MOBILE DROPDOWN MENU --> */}
      </div>
    </>
  );
}
