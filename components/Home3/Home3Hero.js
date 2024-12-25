"use client";
import Link from "next/link";
import Breadcumb from "@/layouts/breadcumb";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const headerBG = "img/hero.jpg";

export default function Home3Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_hero_header">
        <div className="container">
          <div className="content_holder max800">
            <div className="title_holder">
              <h3>Crafting Excellence</h3>
              <p>
                JR Bond is a forward-thinking company specializing in
                construction chemicals, offering a robust range of products
                including tile adhesives, block adhesives, epoxy grouts, and
                waterproofing solutions. Despite being a new entity, JR Bond is
                powered by a management team with over 20 years of industry
                experience, ensuring a blend of innovation and reliability.
                Committed to exceeding industry standards, JR Bond is accredited
                with prestigious certifications like RAPL, MQA, and ISO
                9001:2015, reflecting our dedication to quality and excellence.
                Our mission is to build enduring partnerships and deliver
                solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
        <div className="bg_holder">
          <div
            className="o_img"
            style={{
              backgroundImage: `url(/Images/tile-about-bg-2.jpg)`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="o_color"></div>
        </div>
      </div>
    </>
  );
}
