import {
  Drawing,
  Learning,
  TowerCrane,
} from "@/public/svg/service/IconService";
import Link from "next/link";

export default function ValuesComponent() {
  const values = [
    {
      value: "Quality",
      description:
        "At JR Bond, we believe that quality is the cornerstone of our business. Every product we create undergoes rigorous testing and quality control to ensure it meets the highest industry standards. This commitment to quality ensures that our customers receive only the best, enhancing their projects with lasting durability and exceptional performance.",
    },
    {
      value: "Innovation",
      description:
        "Innovation drives JR Bond to continuously improve and develop new products that meet the evolving requirements and needs of the market. We invest in research and development to stay ahead of industry trends and to offer cutting-edge solutions that provide better results, ease of use, and greater efficiency for our customers helping make better products.",
    },
    {
      value: "Customer Satisfaction",
      description:
        "Customer satisfaction is at the heart of everything we do at JR Bond. We strive to understand and anticipate our customers’ needs, providing them with products and services that exceed their expectations. Our dedicated customer support team is always ready to assist, ensuring a seamless experience from purchase to project completion.",
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
