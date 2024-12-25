import Link from "next/link";
import LogoImage from "@/public/Images/logo_rm.png";
import Image from "next/image";
import { ourProducts } from "@/data";

export default function Footer() {
  return (
    <>
      <footer className="industify_fn_footer">
        <div className="top_footer">
          <div
            className="top_footer_img"
            style={{ background: "url(/img/footer/bg.jpg)" }}
          ></div>
          {/* <!-- TRIPLE WIDGET --> */}
          <div className="footer_widget">
            <div className="container">
              <div className="inner">
                <ul className="widget_area">
                  <li>
                    <div className="item">
                      <div className="logo">
                        <Link href="/">
                          <Image
                            className="h-16 w-56 object-cover invert m-auto"
                            width={400}
                            height={200}
                            src={LogoImage}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="textwidget ml-8">
                        <p>
                          We are focused on delivering the best in class tile
                          adhesives, grouts and waterproofing segment, that our
                          clients would like to choose above anything else.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="wid-title">
                        <span>Our Products</span>
                      </div>
                      <div className="widget_nav_menu">
                        <ul className="menu">
                          {ourProducts.map((category) => {
                            return (
                              <li key={category.id}>
                                <Link
                                  className="hover:underline"
                                  href={`/products/${category.id}`}
                                >
                                  {category.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item flex flex-col gap-2">
                      <div className="wid-title">
                        <span>Helpful Links</span>
                      </div>
                      <div className="text-white">
                        Let&#39;s Connect and Build Together
                      </div>
                      <div className="">
                        <Link href="/contact">
                          <button className="py-2 px-4 bg-theme-cyan text-white rounded">
                            Contact Us
                          </button>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /TRIPLE WIDGET --> */}
        </div>
        {/* <!-- BOTTOM --> */}
        {/* <div className="footer_bottom">
          <div className="container">
            <div className="footer_bottom_in">
              <div className="bottom_widget">
                <div className="widget_nav_menu">
                  <ul className="menu">
                    <li>
                      <Link href="/portfolio">Products</Link>
                    </li>
                    <li>
                      <Link href="#">Disclaimer</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="#" className="industify_fn_totop">
                <span className="top"></span>
                <span className="text">To Top</span>
              </Link>
            </div>
          </div>
        </div> */}
        {/* <!-- /BOTTOM --> */}
      </footer>
    </>
  );
}
