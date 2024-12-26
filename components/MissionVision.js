import React from "react";

import NeedHelp from "./Home/NeedHelp";

const MissionVision = () => {
  const missionVision = [
    {
      icon: "/svg/mission.svg",
      title: "Our Mission",
      description:
        "To illuminate spaces with innovative, energy-efficient, and sustainable lighting solutions that enhance lives and foster environmental stewardship. At RM Lights, we aim to create products that merge cutting-edge technology with eco-conscious design, ensuring customer satisfaction and promoting a brighter, greener future.",
    },
    {
      icon: "/svg/vision.svg",
      title: "Our Vision",
      description:
        "To be a global leader in the lighting industry, setting benchmarks in quality, innovation, and sustainability. RM Lights envisions a world where advanced lighting technology enhances everyday life, fosters productivity, and contributes to the well-being of communities while reducing environmental impact.",
    },
  ];

  return (
    <>
      <div className="mission-vision-container">
        {missionVision.map((item, index) => (
          <div key={index} className="mission-card">
            <img src={item.icon} alt={item.title} className="icon-container" />
            <h2 className="mission-card-title">{item.title}</h2>
            <p className="mission-card-description">{item.description}</p>
          </div>
        ))}
      </div>
      <NeedHelp />
    </>
  );
};

export default MissionVision;
