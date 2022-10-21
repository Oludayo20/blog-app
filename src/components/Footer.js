import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  iBloger<span></span>
                </h5>
                <p>About the company, little description will goes here.. </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">&nbsp;9ja Blog</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">&nbsp;School Blog</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Follow up<span></span>
                </h5>
                <a href="#">
                  {" "}
                  <i className="footer-i fa fa-facebook"> </i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fa fa-twitter"> </i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fa fa-youtube"> </i>{" "}
                </a>
              </div>
            </div>
            <br></br>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Subscribe to Exclusive Blog<span></span>
                </h5>
                <p>Subscribe to our website. Get latest gist and news</p>
                <div className="emailfield">
                  <input
                    type="text"
                    className=" foot-input"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="foot-input"
                    placeholder="Email"
                  />
                  <input
                    className="submitbutton ripplelink"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Design Oludayo's © 2022. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
