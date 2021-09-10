import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ServiceItem from "../components/ServiceItem";

const Services = () => {
  return (
    <Layout>
      {/* page header */}
      <PageHeader name="Services" title="What we offer" />

      <section class="section bg-white">
        <div class="container">
          {[1, 2, 3, 4, 5, 6].map((item, i) => {
            return <ServiceItem key={i} i={i} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
