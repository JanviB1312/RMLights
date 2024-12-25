export default function JRHome2About() {
  return (
    <>
      <div className="about_section">
        {/* <!-- About Shortcode --> */}
        <div className="fn_cs_about">
          <div className="container">
            <div className="a_inner">
              <div className="leftpart">
                <div className="title_holder">
                  <h3 className="title">Founder&#39;s Statement</h3>
                  <p>
                    Welcome to JR Bond, where our passion for innovation and
                    excellence drives every product we create. For over 20
                    years, my journey in the construction chemicals industry has
                    been about more than just building products—it&#39;s been
                    about building trust. At JR Bond, we&#39;re proud to offer
                    solutions that not only meet but exceed industry standards.
                    Our diverse range of products, from tile adhesives to epoxy
                    grouts, reflects our unwavering commitment to quality and
                    performance.
                  </p>
                  <p>
                    As we embark on this new chapter with JR Bond, I am deeply
                    grateful to our clients, whose trust has been the
                    cornerstone of our success. Our mission remains clear: to
                    continue delivering top-tier construction solutions that
                    stand the test of time. Together, we look forward to
                    crafting a future defined by excellence, innovation, and
                    enduring partnerships. Thank you for being a part of our
                    journey.
                  </p>
                </div>
                <div className="sign_holder">
                  <h3 className="name">Mr. Vipul Patel</h3>
                  {/*  <p className="occ">Founder</p> */}
                </div>
              </div>
              <div className="rightpart">
                <div className="r_inner" id="scene">
                  <div className="layer border" data-depth="0.3">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <img src="/img/thumb/500-560.jpg" alt="" />
                  </div>
                  <div className="img_holder layer" data-depth="0.5">
                    <img src="/img/thumb/500-560.jpg" alt="" />
                    <div
                      className="abs_img"
                      style={{
                        backgroundImage: "url(/Images/founder.jpg)",
                        backgroundPosition: "top",
                      }}
                    ></div>
                  </div>
                  <div
                    className="dots layer"
                    data-switch="disable"
                    data-depth="0.9"
                  >
                    <img src="/img/thumb/500-560.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /About Shortcode --> */}
      </div>
    </>
  );
}
