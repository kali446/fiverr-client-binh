import React from "react";

const PageHeader = ({
  name = "Who We Are",
  title = "We believe in designing the best interfaces. We createeverything digital and analytical 🔥",
}) => {
  return (
    <section className="page-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="my-0 my-lg-5">
              <p className="mb-3 font-weight-500 has-anim fade">{name}</p>
              <h2 className="text-white font-weight-500 has-anim fade anim-delay-1">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
