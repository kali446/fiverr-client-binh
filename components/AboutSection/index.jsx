import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="mb-n5 has-anim fade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                loading="lazy"
                className="img-fluid"
                src="/assets/images/about-02.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-3 has-anim fade">
              <h2 className="text-dark font-weight-500">
                12+ <br /> Years of <br /> Experience
              </h2>
            </div>
            <div className="col-md-6 offset-md-1 mt-4 mt-md-0 has-anim fade anim-delay-1">
              <p className="lead">
                <span className="text-dark">
                  Abildon is a world-className creative studio
                </span>
                . Well known as designing website &amp; mobile apps. at the
                intersection of art, design and technology. We are on a mission
                to explore, create meaning and provoke emotions through design
                and storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
