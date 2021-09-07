import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { getContactPageData } from "../helpers/api-utils";

const contact = ({ contactData }) => {
  const seoObject = {
    ...contactData.seo,
    title: contactData.pageTitle,
  };

  const pageHeader = {
    name: contactData.pageHeader.name,
    title: contactData.pageHeader.title,
  };

  return (
    <Layout data={seoObject}>
      {/* page header */}
      <PageHeader name={pageHeader.name} title={pageHeader.title} />

      {/* contact form */}
      <section className="section contact-us bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="block">
                <div className="row justify-content-center">
                  <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="pr-0 pr-lg-4">
                      <h4 className="text-dark mb-3 has-anim fade">
                        Describe Your Project
                      </h4>
                      <p className="has-anim fade">
                        Leave us your contact info, we’ll get back to you within
                        24 hours. Stay up to date with our newest collections,
                        latest deals and special offers!
                      </p>

                      <div className="mt-4 pt-2 has-anim fade anim-delay-1">
                        <p className="text-uppercase small font-weight-500 mb-1">
                          Email us:
                        </p>
                        <p>
                          <a
                            className="line-link text-dark"
                            href="mailto:contact@abildon.io"
                          >
                            contact@abildon.io
                          </a>
                        </p>
                      </div>
                      <div className="mt-4 has-anim fade anim-delay-2">
                        <p className="text-uppercase small font-weight-500 mb-1">
                          Call us:
                        </p>
                        <p>
                          <a
                            className="line-link text-dark"
                            href="tel:0722232424"
                          >
                            +072 223 2424
                          </a>
                        </p>
                      </div>
                      <div className="mt-4 has-anim fade anim-delay-3">
                        <p className="text-uppercase small font-weight-500 mb-1">
                          Address:
                        </p>
                        <p>Qvid city, 02000</p>
                        <p>16 Nikola Y. Vaptsarov Blvd,</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <form
                      action="https://getform.io/f/429e7728-da05-4793-b001-1710284910dd"
                      method="POST"
                    >
                      <div className="row gh-1 gv-2">
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Your Name *"
                            name="name"
                          />
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            name="email"
                          />
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Your Phone *"
                            name="phone"
                          />
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="company"
                            className="form-control"
                            placeholder="Company"
                            name="company"
                          />
                        </div>
                        {/* <div className="col-12 col-md-6 has-anim fade">
                          <select className="form-control custom-control custom-select">
                            <option selected="">Type of Project</option>
                            <option>Web/App UI Project</option>
                            <option>Creative Branding</option>
                            <option>Wordpress Website</option>
                            <option>Static Website</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <select className="form-control custom-control custom-select">
                            <option selected="">Your Budget</option>
                            <option>&lt; 10,000</option>
                            <option>10k-20k</option>
                            <option>20k-30k</option>
                            <option>&gt; 30,000</option>
                          </select>
                        </div> */}
                        <div className="col-12 has-anim fade">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>

                        <div className="col-12 has-anim fade">
                          <textarea
                            className="form-control"
                            rows="1"
                            placeholder="Message *"
                            name="message"
                          ></textarea>
                        </div>
                        <div className="col-12 has-anim fade">
                          <button
                            className="btn btn-black"
                            type="submit"
                            data-text="Submit"
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default contact;

export async function getStaticProps() {
  const data = await getContactPageData();

  return {
    props: {
      contactData: data,
    },
  };
}
