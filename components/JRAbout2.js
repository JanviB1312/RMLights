export default function JRAbout2() {
  return (
    <>
      <div className="about_section">
        {/* <!-- About Shortcode --> */}
        <div className="fn_cs_about">
          <div className="container">
            <div className="a_inner">
              <div className="leftpart">
                <div className="title_holder">
                  <h3 className="title">R&D Director&#39;s Insights</h3>
                  <p>
                    Our R&D Director is at the forefront of our innovation
                    efforts, leading the charge in developing cutting-edge
                    solutions that drive our company forward. With a keen eye
                    for emerging trends and technologies, they are instrumental
                    in transforming ideas into impactful products and services.
                    Their passion for research and development ensures that we
                    stay ahead of the curve, continuously improving and
                    expanding our offerings. Through their leadership, our R&D
                    team is empowered to explore new possibilities and push the
                    boundaries of what&#39;s possible.
                  </p>
                </div>
                <div className="sign_holder">
                  <h3 className="name">Divyesh patel</h3>
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
                        backgroundImage: "url(/Images/newmember1.jpeg)",
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
