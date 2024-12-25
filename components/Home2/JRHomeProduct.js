import { ourProducts } from "@/data";
import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

export default function JRHomeProduct() {
  return (
    <>
      <div className="fn_cs_project_sticky">
        <div className="container">
          <div className="inner">
            <div className="left_part">
              <div className="fn_cs_sticky_section">
                <h3>
                  Our latest <span>Products</span>
                </h3>
                <p>
                  Discover JR Bond&#39;s latest innovations in tile and adhesive
                  solutions, featuring our new range of Tile Grout, Epoxy Grout,
                  Adhesive, and Waterproofing Segment. These products are
                  meticulously engineered to offer superior bonding, enhanced
                  durability, and exceptional water resistance, ensuring your
                  construction and renovation projects achieve the highest
                  standards of quality and longevity.
                </p>
                <Link href="/products">
                  <span className="text">View All Products</span>
                  <span className="arrow">
                    <Arrow_r className="fn__svg" />
                  </span>
                  <span className="arrow_hover">
                    <Arrow_r className="fn__svg" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="right_part">
              <div className="fn_cs_sticky_section">
                <ul>
                  {ourProducts.map(
                    ({ title, homeImageSrc, description, id }) => {
                      return (
                        <li key={id}>
                          <div className="item">
                            <div className="img_holder">
                              <img src="/img/thumb/560-375.jpg" alt="" />
                              <div
                                className="abs_img"
                                style={{
                                  backgroundImage: `url(${homeImageSrc})`,
                                  /* height: "80%",
                                  width: "80%", */
                                }}
                              >
                                <Link href={`/products/${id}`}></Link>
                              </div>
                            </div>
                            <div className="title_holder">
                              <h3>
                                <Link href={`/products/${id}`}>{title}</Link>
                              </h3>
                              <p>
                                <Link href={`/products/${id}`}>
                                  <span className="text">View More</span>
                                  <span className="arrow">
                                    <Arrow_r className="fn__svg" />
                                  </span>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
