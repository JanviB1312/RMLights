import { Arrow_r } from "@/public/svg/icon";
import {
  Design,
  Drawing,
  Learning,
  TowerCrane,
} from "@/public/svg/service/IconService";
import Link from "next/link";

export default function JRHome3Service() {
  return (
    <>
      <div className="fn_cs_services_classic">
        <div className="fn_cs_main_title">
          <div className="container">
            <div className="title_holder">
              <h3>
                Build Strong <br /> Build Better
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="list">
            <ul>
              <li>
                <div className="item">
                  {/* <Link href="/services/serviceSinglePage1"></Link> */}
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Learning className="fn__svg" />
                  </span>
                  <h3>Advanced Tile Adhesives</h3>
                  <p>
                    JR Bond&#39;s advanced tile adhesives ensure a strong,
                    durable bond for all types of tiles. Our polymer-modified
                    formulas provide superior flexibility and adhesion,
                    guaranteeing long-lasting results in any environment.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  {/* <Link href="/services/serviceSinglePage2"></Link> */}
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Drawing className="fn__svg" />
                  </span>
                  <h3>Precision Grout Solutions</h3>
                  <p>
                    Achieve flawless finishes with JR Bond&#39;s range of tile
                    and epoxy grouts. Designed for exceptional durability and
                    resistance to stains, our grouts offer both aesthetic appeal
                    and functional reliability for any tiling project.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  {/* <Link href="/services/serviceSinglePage4"></Link> */}
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Design className="fn__svg" />
                  </span>
                  <h3>Comprehensive Waterproofing</h3>
                  <p>
                    Protect your structures from water damage with JR Bond&#39;s
                    comprehensive waterproofing solutions. Our cutting-edge
                    products ensure maximum protection and longevity, keeping
                    your projects safe and secure from moisture-related issues.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
