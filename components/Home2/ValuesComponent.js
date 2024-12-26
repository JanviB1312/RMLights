import {
  Drawing,
  Learning,
  TowerCrane,
} from "@/public/svg/service/IconService";
import Link from "next/link";

export default function ValuesComponent() {
  const values = [
    {
      value: "Our People",
      description:
        "We believe our people are our greatest strength. By fostering a supportive and inclusive workplace, we empower our team to innovate, excel, and achieve their full potential.",
    },
    {
      value: "Innovation",
      description:
        "Innovation is at the heart of everything we do. We are committed to designing advanced, cost-efficient, and high-quality products that drive progress and redefine industry standards.",
    },
    {
      value: "Excellence",
      description:
        "We embrace the philosophy of continuous improvement, aiming for excellence in every aspect of our operations—from product quality to customer satisfaction and beyond.",
    },
  ];

  return (
    <>
      <div className="service_section_2">
        {/* <!-- Main Title --> */}
        <div className="fn_cs_main_title">
          <div className="container">
            <div className="title_holder">
              <h3>Our Values</h3>
            </div>
          </div>
        </div>
        {/* <!-- /Main Title --> */}

        {/* <!-- Services Shortcode --> */}
        <div className="fn_cs_services">
          <div className="container">
            <div className="list">
              <ul>
                <li>
                  <div className="item">
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <Learning className="fn__svg" />
                    </span>
                    <h3>{values[0].value}</h3>
                    <p>{values[0].description}</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <Drawing className="fn__svg" />
                      {/* <img className="fn__svg" src="/svg/service/drawing.svg" alt="svg" /> */}
                    </span>
                    <h3>{values[1].value}</h3>
                    <p>{values[1].description}</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <TowerCrane className="fn__svg" />
                    </span>
                    <h3>{values[2].value}</h3>
                    <p>{values[2].description}</p>
                  </div>
                </li>
                {/* <li>
                  <div className="item">
                    <Link href="/services/serviceSinglePage7"></Link>
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <TowerCrane className="fn__svg" />
                    </span>
                    <h3>
                      Chemical <br />
                      Industry
                    </h3>
                    <p>
                      Our manufacturing services provide assurance to clients
                      that their people, processes, and products are as safe and
                      efficient as possible. From logistics and compliance,
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link href="/services/serviceSinglePage7"></Link>
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <TowerCrane className="fn__svg" />
                    </span>
                    <h3>
                      Chemical <br />
                      Industry
                    </h3>
                    <p>
                      Our manufacturing services provide assurance to clients
                      that their people, processes, and products are as safe and
                      efficient as possible. From logistics and compliance,
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Services Shortcode --> */}
      </div>
    </>
  );
}
