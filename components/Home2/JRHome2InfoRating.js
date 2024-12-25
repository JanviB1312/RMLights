"use client";
import { PlayVideo, Stars } from "@/public/svg/icon";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function JRHome2InfoRating() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_info_rating" style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="inner">
            <div className="left_part">
              <div className="title_holder">
                <h3 className="l_title">A Legacy of 20+ Years</h3>
                <p className="l_desc">
                  With over 20 years of industry expertise, our management team
                  has been the driving force behind countless successful
                  projects, bringing a wealth of knowledge and experience to
                  every product we offer. Our commitment to excellence is not
                  just a promise; it&#39;s a legacy built on decades of
                  dedication to quality and innovation. Accreditations like
                  RAPL, DPIIT, Make In India, IP, MQA, and ISO 9001:2015 are
                  testaments to our unwavering focus on industry-leading
                  standards and exceptional craftsmanship.
                </p>
              </div>
              <div
                className="l_video fn_cs_lightgallery"
                onClick={() => setIsOpen(true)}
              >
                {/*  <span className="lightbox" data-src="https://youtu.be/3j3SQEUfREs">
                                    <span className="icon">
                                        <PlayVideo className="fn__svg" />
                                    </span>
                                    <span className="text">View Company Promo Video</span>
                                </span> */}
              </div>
            </div>
            <div className="middle_part">
              <div className="m_in">
                <div className="rating_holder">
                  <div className="r_header"></div>
                  <div className="r_footer"></div>
                  {/* <Link href="#"></Link> */}
                  <Stars className="fn__svg" />
                  {/* <h3 className="rating_number">9.7</h3>
                  <h3 className="rating_text">Customer Rating</h3> */}
                </div>
                <div className="tagline_holder" style={{ height: "310.969px" }}>
                  <div className="tl_inner">
                    {/* <span>Full reviews at trustpilot</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="right_part border border-black flex justify-center items-center">
              {/* <div
                className="o_img"
                style={{ backgroundImage: "url(/img/about/rating_bg.jpg)" }}
              ></div> */}
              <div className="flex space-x-20">
                <img
                  className="w-1/2 border-2 border-black shadow-md ml-4"
                  src="/Images/certificate2.jpg"
                  alt="certificate 2"
                />
                <img
                  className="w-1/2 border-2 border-black shadow-md"
                  src="/Images/certificate3.jpg"
                  alt="certificate 3"
                />
              </div>
              {/* <img
                className=" -mt-36 border-2 border-black shadow-md ml-16"
                src="/Images/certificate1.jpg"
                alt="certificate 1"
              /> */}
              <div className="o_color"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      /> */}
    </>
  );
}
