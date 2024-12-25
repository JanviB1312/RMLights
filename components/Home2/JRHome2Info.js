import { Checked } from "@/public/svg/icon";
import React from "react";

export default function JRHome2Info() {
  return (
    <>
      <div className="fn_cs_info_list full" data-cols="3">
        <div className="container">
          <div className="list">
            <ul>
              <li>
                <div className="item">
                  <span className="icon">
                    <Checked className="fn__svg" />
                  </span>
                  <h3>We Have ISO Certificate</h3>
                  <p>An ISO 1900:2015</p>
                </div>
              </li>
              <li>
                <div className="item">
                  <span className="icon">
                    <Checked className="fn__svg" />
                  </span>
                  <h3>German Technology</h3>
                  <p>to get the best blend</p>
                </div>
              </li>
              <li>
                <div className="item">
                  <span className="icon">
                    <Checked className="fn__svg" />
                  </span>
                  <h3>Premuim Quality Product</h3>
                  <p>with excellence in each molecule</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
