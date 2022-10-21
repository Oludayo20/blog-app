import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import transitions from "bootstrap";

function Header({ active, setActive, user, handleLogout }) {
  const userId = user?.uid;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top htt">
      <div className="container-fluid bg-faded padding-media">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            className="nav-item nav-link navbar-brand pdd"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              // paddingTop: "100px",
            }}
            onClick={() => setActive("home")}
          >
            i<span style={{ color: "#f50404" }}>Blog</span>
          </li>
        </Link>
        <button
          className="navbar-toggler mt-3"
          id="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          data-bs-parent="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="container padding-medial">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    href="#"
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link> */}
                <Link
                  to="/create"
                  style={{ textDecoration: "none" }}
                  type="submit"
                >
                  <li
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}
                  >
                    Create
                  </li>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    About
                  </li>
                </Link>
                <Link to="+" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "contact" ? "active" : ""
                    }`}
                    onClick={() => setActive("contact")}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="Profile Pic"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user?.displayName}
                      </p>
                      <li
                        className="li nav-item nav-link"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <Link to="auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        onClick={() => setActive("login")}
                      >
                        Login
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Header;
