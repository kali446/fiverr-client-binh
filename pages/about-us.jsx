import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import {
  getAboutUsPageData,
  getAllTestimonials,
  getAllTeamMembers,
} from "../helpers/api-utils";

const AboutUs = ({ aboutusData, testimonials, teamMembers }) => {
  const seoObject = {
    ...aboutusData.seo,
    title: aboutusData.pageTitle,
  };

  const pageHeader = {
    name: aboutusData.pageHeader.name,
    title: aboutusData.pageHeader.title,
  };

  return (
    <Layout data={seoObject}>
      {/* page header */}
      <PageHeader name={pageHeader.name} title={pageHeader.title} />

      {/* about us */}
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-start justify-content-lg-around align-items-center">
            <div className="col-xl-5 col-lg-5 col-md-8 has-anim">
              <img
                loading="lazy"
                className="img-fluid"
                src="assets/images/about-image.jpg"
                alt=""
              />
            </div>
            <div className="col-xl-5 col-lg-6 mt-5 mt-lg-0">
              <p className="lead text-dark mb-3 has-anim fade">
                As a full-service digital agency 👋, we work closely with our
                clients to define, design and develop transformative user
                experiences across all platforms and brand’s touchpoints.
              </p>

              <p className="has-anim fade anim-delay-1">
                We build thoughtful digital experiences for the modern world. We
                have created an environment to encourage warm exchanges around
                brands. In a permanent adaptation, the ideas are concretized by
                the bonds which we weave between our customers and our talents.
              </p>

              <a
                href="contact.html"
                className="btn btn-black mt-5 has-anim fade anim-delay-2"
                data-text="Contact Us"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* some facts */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 facts-box">
                  <div className="block has-anim fade">
                    <h1 className="facts-box-title text-white">110+</h1>
                    <p className="font-weight-500">
                      Websites & Apps <br /> launched
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 facts-box">
                  <div className="block mt-5 mt-sm-0 has-anim fade anim-delay-2">
                    <h1 className="facts-box-title text-white">100%</h1>
                    <p className="font-weight-500">
                      In-house &amp; <br /> independent
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 facts-box">
                  <div className="block mt-5 mt-md-0 has-anim fade anim-delay-3">
                    <h1 className="facts-box-title text-white">50+</h1>
                    <p className="font-weight-500">
                      Awards &amp; <br /> recognition
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 facts-box">
                  <div className="block mt-5 mt-md-0 has-anim fade anim-delay-4">
                    <h1 className="facts-box-title text-white">20K+</h1>
                    <p className="font-weight-500">
                      Satisfied <br /> clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* showcase carousel */}
      <section className="section bg-white team-group-carousel overflow-hidden">
        <div className="container">
          <div className="row justify-content-start justify-content-lg-around align-items-center">
            <div className="col-12">
              <div className="swiper-container overflow-initial">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <div className="team-group-image has-anim fade">
                      <img
                        src="assets/images/team-group/team-grp-05.jpg"
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-group-image has-anim fade">
                      <img
                        src="assets/images/team-group/team-grp-04.jpg"
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-group-image has-anim fade">
                      <img
                        src="assets/images/team-group/team-grp-03.jpg"
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-group-image has-anim fade">
                      <img
                        src="assets/images/team-group/team-grp-01.jpg"
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="team-group-image has-anim fade">
                      <img
                        src="assets/images/team-group/team-grp-00.jpg"
                        alt="team"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our clients */}
      <section className="section">
        <div className="container">
          <div className="section pt-0">
            <div className="review-carousel review-carousel-light">
              <div className="row justify-content-center">
                <div className="col-lg-9 has-anim">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {testimonials.map((item) => (
                        <div key={item.id} className="swiper-slide">
                          <div className="review-item">
                            <div className="review-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                {" "}
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{" "}
                                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />{" "}
                              </svg>
                            </div>
                            <h3 className="review-text">“{item.review}”</h3>
                            <span className="review-author">{item.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="swipeCarousel-control">
                      <div className="activeslide">01</div>
                      <div className="totalslide">0{testimonials.length}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clients-logo-grid">
            <div className="logo-item">
              <img
                loading="lazy"
                className="has-anim fade anim-delay-1"
                src="assets/images/clients/amazon.png"
                alt="client-image"
              />
            </div>
            <div className="logo-item">
              <img
                loading="lazy"
                className="has-anim fade"
                src="assets/images/clients/google.png"
                alt="client-image"
              />
            </div>
            <div className="logo-item">
              <img
                loading="lazy"
                className="has-anim fade anim-delay-2"
                src="assets/images/clients/spotify.png"
                alt="client-image"
              />
            </div>
            <div className="logo-item">
              <img
                loading="lazy"
                className="has-anim fade anim-delay-4"
                src="assets/images/clients/airbnb.png"
                alt="client-image"
              />
            </div>
            <div className="logo-item">
              <img
                loading="lazy"
                className="has-anim fade anim-delay-3"
                src="assets/images/clients/fox.svg"
                alt="client-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* our teams */}
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 has-anim fade">
              <div className="section-title mb-4">
                <p className="mb-2">Our Awesome</p>
                <h2 className="title text-dark">Powerful Team</h2>
              </div>
            </div>
          </div>
          <div className="row row-team">
            {teamMembers && teamMembers.length > 0 && (
              <>
                {teamMembers.map((member) => {
                  const {
                    facebookProfile,
                    linkedinProfile,
                    twitterProfile,
                    githubProfile,
                  } = member;

                  return (
                    <div key={member.id} className="col-xl-3 col-lg-4 col-6">
                      <div className="team-item has-anim fade">
                        <div className="block overflow-hidden position-relative">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src={member.image.url}
                            alt={member.image.name}
                          />

                          <div className="social-profile d-flex align-items-end justify-content-center">
                            <ul className="list-unstyled list-inline mb-4 pb-2">
                              {facebookProfile && (
                                <li className="list-inline-item">
                                  <Link href={facebookProfile}>
                                    <a>
                                      <i className="lab la-facebook-f"></i>
                                    </a>
                                  </Link>
                                </li>
                              )}

                              {twitterProfile && (
                                <li className="list-inline-item">
                                  <Link href={twitterProfile}>
                                    <a>
                                      <i className="lab la-twitter"></i>
                                    </a>
                                  </Link>
                                </li>
                              )}

                              {linkedinProfile && (
                                <li className="list-inline-item">
                                  <Link href={linkedinProfile}>
                                    <a>
                                      <i className="lab la-linkedin-in"></i>
                                    </a>
                                  </Link>
                                </li>
                              )}

                              {githubProfile && (
                                <li className="list-inline-item">
                                  <Link href={githubProfile}>
                                    <a>
                                      <i className="lab la-github"></i>
                                    </a>
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <h4 className="h5 text-dark">{member.name}</h4>
                          <p className="h6 font-weight-400 mt-1">
                            {member.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;

export async function getStaticProps() {
  const data = await getAboutUsPageData();
  const testimonials = await getAllTestimonials();
  const teamMembers = await getAllTeamMembers();

  return {
    props: {
      aboutusData: data,
      testimonials,
      teamMembers,
    },
  };
}
