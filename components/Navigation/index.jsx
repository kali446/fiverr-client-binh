import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="adjust-navigation-height"></div>

      <header className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 py-lg-4">
                {/* <!-- navbar logo --> */}
                <a
                  className="navbar-brand font-weight-bold mb-0"
                  href="/"
                  title="Abildon"
                >
                  <img src="/assets/images/logo.png" alt="Abildon" />
                </a>

                {/* <!-- navbar-toggler --> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="navbar-menu"
                >
                  <svg viewBox="0 0 341.333 341.333">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <rect
                          y="277.333"
                          width="341.333"
                          height="42.667"
                        />{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <rect
                          y="149.333"
                          width="341.333"
                          height="42.667"
                        />{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <rect y="21.333" width="341.333" height="42.667" />{" "}
                      </g>{" "}
                    </g>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g>{" "}
                  </svg>
                </button>

                {/* <!-- sidenav-overlay --> */}
                <div className="sidenav-overlay"></div>

                {/* <!-- navbar links --> */}
                <div className="navbar-collapse" id="navbar-menu">
                  <ul className="navbar-nav mx-auto">
                    <li data-toggle="navbar-menu-close">
                      <i className="las la-times mr-1"></i>Close
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about-us">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/team">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog?page=1">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>

                  {/* <!-- navbar actions --> */}
                  <div className="navbar-actions">
                    <a
                      href="https://ui8.net/flexplate/products"
                      className="btn btn-white"
                      data-text="Buy Now"
                      target="_blank"
                      rel="nofollow"
                    >
                      <span>Lauch App</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
