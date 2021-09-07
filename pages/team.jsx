import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import {
  getAllTeamMembers,
  getTeamPageData,
  getAllCareers,
} from "../helpers/api-utils";

const Team = ({ teamData, teamMembers, careers }) => {
  const seoObject = {
    ...teamData.seo,
    title: teamData.pageTitle,
  };

  const pageHeader = {
    name: teamData.pageHeader.name,
    title: teamData.pageHeader.title,
  };

  return (
    <Layout data={seoObject}>
      {/* page header */}
      <PageHeader name={pageHeader.name} title={pageHeader.title} />

      {/* team members */}
      <section className="section bg-white">
        <div className="container">
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

      {/* open positions */}
      <section
        id="open-positions"
        className="section"
        style={{ borderBottom: "1px solid #151829" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center has-anim fade">
                <p className="mb-2">Apply On Our</p>
                <h2 className="title text-white">Open Positions</h2>
              </div>

              {careers && careers.length > 0 && (
                <>
                  {careers.map((career, i) => {
                    return (
                      <div
                        key={career.id}
                        className={`row justify-content-center pt-3 has-anim fade ${
                          i > 0 && "mt-5"
                        }`}
                      >
                        <div className="col-md-4 mb-4 mb-md-0">
                          <h3 className="text-white font-weight-500">
                            {career.position}
                          </h3>
                        </div>
                        <div className="col-lg-7 col-md-8">
                          <ul className="open-positions-list pl-0 pl-md-5">
                            {career.jobItem && career.jobItem.length > 0 && (
                              <>
                                {career.jobItem.map((item) => (
                                  <li key={item.id}>
                                    <h4>
                                      <a
                                        href="#!"
                                        className="text-light font-weight-500 d-block mb-2"
                                        target="_blank"
                                      >
                                        {item.title}
                                      </a>
                                    </h4>
                                    <span>{item.location}</span>
                                  </li>
                                ))}
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

export async function getStaticProps() {
  const data = await getTeamPageData();
  const teamMembers = await getAllTeamMembers();
  const careers = await getAllCareers();

  return {
    props: {
      teamData: data,
      teamMembers,
      careers,
    },
  };
}
