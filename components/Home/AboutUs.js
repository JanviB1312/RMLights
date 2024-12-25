"use client";
import React from "react";

const AboutUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <div>
      <div className="overview-container">
        {/* Left Div */}
        <div className="overview-left">
          <div className="overview">
            <div className="heading-style">
              <h1>About Us</h1>
            </div>
            <p className="overview-text">
              RM LIGHTS is a leading manufacturer of high-quality indoor and
              outdoor LED lighting solutions. We understand the unique needs of
              our customers and are committed to providing consumer-centric,
              innovative, and cost-effective solutions that enhance the lighting
              experience. Our LED lights are designed to save energy, boost
              efficiency, and promote a cleaner, more sustainable environment.
              With RM LIGHTS, you can reduce energy consumption by up to 80% and
              enjoy a longer lifespan compared to traditional lighting sources.
              From LED street lights, industrial lighting, and flood lights to
              specialized solutions for residential, commercial, and urban
              applications, RM LIGHTS is your trusted partner for cutting-edge
              LED lighting solutions in India.
            </p>
          </div>
        </div>

        {/* Right Div */}
        <div className="overview-right mt-16">
          <div className="quotation-box">
            <h3 className="quotation-title">Request a Free Estimate</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  /* value ={formData.name} */
                  /*   onChange={handleChange} */
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobile_no"
                  /*  value={formData.mobile_no} */
                  /*   onChange={handleChange} */
                  placeholder="Enter your phone number"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  /*  value={formData.mobile_no} */
                  /*   onChange={handleChange} */
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  /*   value={formData.message} */
                  /* onChange={handleChange} */
                  placeholder="Message"
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-buttons">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-cancel"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
