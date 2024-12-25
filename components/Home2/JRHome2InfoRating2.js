"use client";
import { Stars } from "@/public/svg/icon";
import { useState } from "react";

export default function JRHome2InfoRating2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_info_rating" style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="inner">
            <div className="left_part">
              <div className="title_holder">
                <h3 className="l_title">Experience That Drives Innovation</h3>
                <p className="l_desc">
                  Though we are a young company, our founder brings great
                  industry experience to the table, guiding our vision and
                  execution. This blend of fresh perspective and seasoned
                  expertise ensures that every product we offer is crafted with
                  a deep understanding of quality and innovation. Our commitment
                  to excellence is further validated by our Startup India
                  certification, a recognition that underscores our dedication
                  to industry standards and our potential for impactful growth.
                </p>
              </div>
              <div
                className="l_video fn_cs_lightgallery"
                onClick={() => setIsOpen(true)}
              ></div>
            </div>
            <div className="middle_part">
              <div className="m_in">
                <div className="rating_holder">
                  <div className="r_header"></div>
                  <div className="r_footer"></div>

                  <Stars className="fn__svg" />
                </div>
                <div className="tagline_holder" style={{ height: "310.969px" }}>
                  <div className="tl_inner"></div>
                </div>
              </div>
            </div>
            <div className="right_part border border-black flex justify-center items-center mt-16">
              <img
                className=" -mt-36 border-2 border-black shadow-md ml-16"
                src="/Images/certificate1.jpg"
                alt="certificate 1"
              />
              <div className="o_color"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
