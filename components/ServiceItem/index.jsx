import React from "react";

const ServiceItem = ({ i }) => {
  if (i % 2 === 0) {
    return (
      <div
        className={`row justify-content-center align-items-center has-anim fade ${
          i !== 0 && "mt-5 pt-5"
        }`}
      >
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
          <div className="pr-0 pr-lg-3">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/services/design.jpg"
              alt="service image"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-10 position-relative">
          <div className="service-icon-lg">
            <svg
              viewBox="0 0 16 16"
              fill="#8bc34a"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
              />
            </svg>
          </div>

          <h3 className="text-dark font-weight-600 mb-4">
            Design &amp; Branding
          </h3>
          <p className="mt-2">
            We build simple, beautiful and differentiated digital products what
            users want. Cupiditate laborum facilis repellat explicabo a
            temporib.
          </p>
          <p className="mt-2">
            Reprehenderit temporibus doloremque cupiditate rem magnam vitae, est
            qui!
          </p>

          <ul className="service-info-list text-dark mt-4">
            <li>Brand Positioning</li>
            <li>Naming</li>
            <li>Logo Design</li>
            <li>Motion Design</li>
            <li>Identity Systems</li>
            <li>Art Direction</li>
            <li>And more...</li>
          </ul>

          <span
            className="my-2 d-inline-block"
            style={{ letterSpacing: "-3px" }}
          >
            ━━
          </span>
          <p>145 projects done</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center align-items-center mt-5 pt-5 has-anim fade">
        <div className="col-lg-5 col-md-10 position-relative">
          <div className="service-icon-lg">
            <svg
              viewBox="0 0 16 16"
              fill="#ecb612"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" />
              <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" />
            </svg>
          </div>

          <h3 className="text-dark font-weight-600 mb-4">Marketing</h3>
          <p className="mt-2">
            Increase your sales thanks to our services tailor-made to your
            client’s need. Cupiditate laborum facilis repellat explicabo a
            temporib.
          </p>
          <p className="mt-2">
            Reprehenderit temporibus doloremque cupiditate rem magnam vitae, est
            qui!
          </p>

          <ul className="service-info-list text-dark mt-4">
            <li>Brand Positioning</li>
            <li>Naming</li>
            <li>Logo Design</li>
            <li>Motion Design</li>
            <li>Identity Systems</li>
            <li>Art Direction</li>
            <li>And more...</li>
          </ul>

          <span
            className="my-2 d-inline-block"
            style={{ letterSpacing: "-3px" }}
          >
            ━━
          </span>
          <p>89 projects done</p>
        </div>
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
          <div className="pr-0 pr-lg-3">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/services/marketing.jpg"
              alt="service image"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ServiceItem;
