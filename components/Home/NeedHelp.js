"use client";
import React from "react";
import Link from "next/link";

const NeedHelp = () => {
  return (
    <div className="needhelp-container">
      <h2 className="needhelp-heading">Need A Free Estimate?</h2>
      <p className="needhelp-description">
        LED Bulb, LED Ceiling lights, Led Panel lights, LED Batten lights, LED
        Flood lights, LED Street Lights, stadium lights, etc.
      </p>
      <Link href="/contact">
        <button className="needhelp-button">Get a Free Estimate</button>
      </Link>
    </div>
  );
};

export default NeedHelp;
