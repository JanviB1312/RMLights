"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [subActive, setSubActive] = useState({ status: false, key: "" });
  const [isActive, setIsActive] = useState({ status: false, key: "" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // adjust width based on your mobile breakpoint

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false });
    } else {
      setIsActive({ status: true, key });
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
      {isMobile ? (
        <section className="text-center p-6">
          <h2 className="text-3xl font-bold mb-4 mt-8">Accreditations</h2>
          <p className="text-lg mb-6">
            JRBond proudly holds a range of prestigious accreditations,
            reflecting our unwavering commitment to excellence. These
            recognitions highlight our dedication to upholding industry-leading
            standards and our continuous pursuit of quality and expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex justify-center">
              <Image
                src="/Images/certificate1.jpg"
                alt="Certification Documents"
                width={220}
                height={200}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Images/certificate2.jpg"
                alt="Extra Certification 1"
                width={180}
                height={180}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Images/certificate3.jpg"
                alt="Extra Certification 2"
                width={180}
                height={180}
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="flex p-6 bg-[#001f3f]">
          {" "}
          {/* Navy blue background */}
          <div className="flex-1" style={{ flex: "0 0 30%" }}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Accreditations
            </h2>{" "}
            {/* Text color adjusted for contrast */}
            <p className="text-lg text-white mb-8">
              {" "}
              {/* Increased bottom margin */}
              JRBond proudly holds a range of prestigious accreditations,
              reflecting our unwavering commitment to excellence. These
              recognitions highlight our dedication to upholding
              industry-leading standards and our continuous pursuit of quality
              and expertise.
            </p>
          </div>
          <div
            className="flex-1 flex flex-wrap justify-between gap-4"
            style={{ flex: "0 0 70%", marginLeft: "20px" }}
          >
            {" "}
            {/* Added margin-left */}
            <div
              className="flex justify-center items-center"
              style={{ flex: "0 0 calc(33.33% - 1rem)" }}
            >
              <Image
                src="/Images/certificate1.jpg"
                alt="Certification Documents"
                width={220}
                height={200}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className="flex justify-center items-center"
              style={{ flex: "0 0 calc(33.33% - 1rem)" }}
            >
              <Image
                src="/Images/certificate2.jpg"
                alt="Extra Certification 1"
                width={180}
                height={180}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className="flex justify-center items-center"
              style={{ flex: "0 0 calc(33.33% - 1rem)" }}
            >
              <Image
                src="/Images/certificate3.jpg"
                alt="Extra Certification 2"
                width={180}
                height={180}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
