"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoImage from "@/public/Images/logo_rm.png";

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
        <div className="logo_hamb">
          <div className="in">
            <div className="menu_logo">
              <Link href="/">
                <Image
                  className="object-contain"
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
              <div
                className="hamburger-box"
                style={{
                  color: isMobileMenu ? "#213dfc" : "#213dfc",
                }}
              >
                <div
                  className="hamburger-inner"
                  style={{
                    backgroundColor: isMobileMenu ? "#213dfc" : "#213dfc",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
        >
          <div>
            <nav>
              <ul className="mmenu">
                <li>
                  <Link href="/" style={{ color: "#333" }}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/products" style={{ color: "#333" }}>
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" style={{ color: "#333" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: "#333" }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
