import React from "react";
import { whyUs } from "../../data.js";
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="heading-style">
        <h1>Why Choose Us ?</h1>
      </div>
      <div className="cards-container">
        {whyUs.map((card, index) => (
          <div key={index} className="card">
            <div className="icon-container">
              <img src={card.icon} alt={`${card.title} icon`} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
