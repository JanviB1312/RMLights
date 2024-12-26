"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoImage from "@/public/Images/logo_rm.png";

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
              <li>
                <Link href="/products">Our Products</Link>
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
