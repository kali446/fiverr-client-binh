import React from "react";

const ClientSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 has-anim fade">
            <div className="section-title text-center">
              <p className="mb-2 text-light">They trust us</p>
              <h2 className="title text-white">Selected Clients</h2>
            </div>
          </div>
        </div>

        <div className="clients-logo-grid">
          <div className="logo-item">
            <a href="#!" className="has-anim fade anim-delay-4">
              <img
                loading="lazy"
                src="/assets/images/clients/lenovo.png"
                alt="brands"
              />
            </a>
          </div>
          <div className="logo-item">
            <a href="#!" className="has-anim fade anim-delay-3">
              <img
                loading="lazy"
                src="/assets/images/clients/payoneer.svg"
                alt="brands"
              />
            </a>
          </div>
          <div className="logo-item">
            <a href="#!" className="has-anim fade anim-delay-2">
              <img
                loading="lazy"
                src="/assets/images/clients/paypal.svg"
                alt="brands"
              />
            </a>
          </div>
          <div className="logo-item">
            <a href="#!" className="has-anim fade anim-delay-4">
              <img
                loading="lazy"
                src="/assets/images/clients/samsung.png"
                alt="brands"
              />
            </a>
          </div>
          <div className="logo-item">
            <a href="#!" className="has-anim fade anim-delay-5">
              <img
                loading="lazy"
                src="/assets/images/clients/slack.png"
                alt="brands"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
