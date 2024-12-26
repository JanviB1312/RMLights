import Link from "next/link";
import LogoImage from "@/public/Images/logo_rm.png";
import Image from "next/image";
import { products } from "@/data";

export default function Footer() {
  return (
    <>
      <footer className="industify_fn_footer bg-white">
        <div className="top_footer">
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
                            className="h-20 w-62 object-contain m-auto"
                            width={400}
                            height={200}
                            src={LogoImage}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="textwidget ml-8">
                        <p>
                          We are dedicated to producing high-quality lighting
                          solutions that our customers trust to illuminate their
                          spaces with efficiency, and innovation.
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
                          {products.map((product) => {
                            return (
                              <li key={product.id}>
                                <Link
                                  className="hover:underline"
                                  href={`/products`}
                                >
                                  {product.title}
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
                      <div className="widget_nav_menu">
                        <ul className="menu">
                          <li>
                            <Link className="hover:underline" href={`/about`}>
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link className="hover:underline" href={`/contact`}>
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
