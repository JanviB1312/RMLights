export default function JRAbout3() {
  return (
    <>
      <div className="about_section">
        {/* <!-- About Shortcode --> */}
        <div className="fn_cs_about">
          <div className="container">
            <div className="a_inner">
              <div className="leftpart">
                <div className="title_holder">
                  <h3 className="title">Director&apos;s Vision</h3>
                  <p>
                    Our Director brings a wealth of leadership and strategic
                    insight to the company, guiding our team with a clear vision
                    and commitment to excellence. With a strong focus on
                    innovation and growth, they play a pivotal role in shaping
                    our direction and ensuring we achieve our goals. Their
                    dedication to fostering a collaborative environment helps
                    drive the success of our projects and the satisfaction of
                    our clients. Under their leadership, the company continues
                    to thrive and adapt in an ever-changing market.
                  </p>
                </div>
                <div className="sign_holder">
                  <h3 className="name">Dhananjay Ughreja</h3>
                  {/* <p className="occ">Director</p> */}
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
                        backgroundImage: "url(/Images/newmember2.jpg)",
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
