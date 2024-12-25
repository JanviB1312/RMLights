"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home3Introduce() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fn_cs_introduce_wrap fn_cs_lightgallery"
        data-url-show="yes"
        data-wing-switch="enable"
      >
        <div className="container">
          <div className="fn_cs_introduce">
            <span className="wing11"></span>
            <span className="wing12"></span>
            <span className="wing21"></span>
            <span className="wing22"></span>
            <div className="o_color"></div>

            <div className="content_holder">
              <div className="title_holder">
                <h5>Let Me Introduce</h5>
                <h3>Our Company</h3>
                <p>
                  JR Bond is a dynamic player in the construction chemicals
                  industry, offering a wide array of high-performance products
                  such as tile adhesives, block adhesives, epoxy grouts, and
                  waterproofing solutions. Although newly established, the
                  company is driven by a leadership team with over 20 years of
                  rich industry experience. This blend of seasoned expertise and
                  innovative approaches ensures that JR Bond consistently
                  delivers products that meet and exceed industry standards. Our
                  commitment to quality, innovation, and customer satisfaction
                  positions us as a trusted partner in the construction sector.
                </p>
              </div>
              <div className="badge_holder">
                <div className="title">
                  <h3>
                    One Stop Solution
                    <br />
                    for Construction Adhesives
                  </h3>
                </div>
                {/* <div className="content">
                  <span className="year">40+</span>
                  <span>years of management experience</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
    </>
  );
}
