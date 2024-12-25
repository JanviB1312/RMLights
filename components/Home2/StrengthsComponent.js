import {
  Drawing,
  Learning,
  TowerCrane,
} from "@/public/svg/service/IconService";
import Link from "next/link";

export default function StrengthsComponent() {
  const strengths = [
    {
      strength: "Durability",
      description:
        "JR Bond’s products are engineered to withstand the toughest conditions, offering exceptional durability and longevity. Whether it’s our Tile Adhesives or Waterproofing Segment, you can trust that our products will maintain their integrity and performance over time, providing reliable solutions for all your tiling and construction needs.",
    },
    {
      strength: "Versatility",
      description:
        "Our comprehensive range of products is designed to meet diverse application requirements. From Tile Grout and Epoxy Adhesive to Tile Cleaners and Fixing Accessories, JR Bond offers versatile solutions that cater to various project demands, ensuring that professionals and DIY enthusiasts alike have the right products for every job.",
    },
    {
      strength: "Ease of Application",
      description:
        "Ease of application is a key feature of JR Bond’s product line. We understand the importance of efficiency and simplicity in the construction and renovation process. Our products are formulated for straightforward use, allowing for quick and hassle-free application, saving time and effort while delivering exceptional results for our customers.",
    },
  ];

  return (
    <>
      <div className="service_section_2">
        {/* <!-- Main Title --> */}
        <div className="fn_cs_main_title">
          <div className="container">
            <div className="title_holder mt-16">
              <h3>Our Strengths</h3>
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
                    {/* <Link href="/services/serviceSinglePage9"></Link> */}
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <Learning className="fn__svg" />
                    </span>
                    <h3>{strengths[0].strength}</h3>
                    <p>{strengths[0].description}</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    {/* <Link href="/services/serviceSinglePage8"></Link> */}
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <Drawing className="fn__svg" />
                      {/* <img className="fn__svg" src="/svg/service/drawing.svg" alt="svg" /> */}
                    </span>
                    <h3>{strengths[1].strength}</h3>
                    <p>{strengths[1].description}</p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    {/* <Link href="/services/serviceSinglePage7"></Link> */}
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <TowerCrane className="fn__svg" />
                    </span>
                    <h3>{strengths[2].strength}</h3>
                    <p>{strengths[2].description}</p>
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
