import React from "react";
import dynamic from "next/dynamic";

const CounterUp = dynamic(() => import("@/components/CounterUp"), {
  ssr: false,
});

const Counter = () => {
  const counterData = [
    { number: 1280, title: "Commercial Projects" },
    { number: 1420, title: "Residential Projects" },
    { number: 100, suffix: "+", title: "Hard Working Employees" },
    { number: 800, suffix: "+", title: "Happy Customers" },
  ];

  return (
    <section className="counter-section">
      <div className="counter-container">
        {counterData.map((item, index) => (
          <div className="counter-block" key={index}>
            <div className="count-box">
              <span className="number">
                <CounterUp count={item.number} time={3} />
                {item.suffix && <span>{item.suffix}</span>}
              </span>
            </div>
            <h6 className="counter-title">{item.title}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
