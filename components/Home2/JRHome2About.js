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
                  <h3 className="title">
                    Illuminating Spaces, Inspiring Innovation.
                  </h3>
                  <p>
                    RM Lights stands as a beacon of excellence in the world of
                    LED lighting solutions. With a focus on quality
                    craftsmanship and innovative design, we are committed to
                    delivering products that transform spaces and enhance
                    experiences. Guided by a vision of sustainability and
                    progress, our Made in India lighting solutions are a
                    testament to technological innovation and superior
                    performance. At RM Lights, we believe in illuminating not
                    just spaces but also lives, one brilliant light at a time.
                  </p>
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
                        backgroundImage: "url(/Images/aboutus1.jpg)",
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
