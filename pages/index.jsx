import React from "react";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import ClientSection from "../components/ClientSection";
import Hero from "../components/HeroSection";
import Layout from "../components/Layout";
import PortfolioSection from "../components/PortfolioSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";
import WorkProcessSection from "../components/WorkProcessSection";
import {
  getAllTestimonials,
  getHomePageData,
  getRelatedBlogPosts,
} from "../helpers/api-utils";

const Home = ({ homeData, testimonials, blogPosts }) => {
  const seoObject = {
    ...homeData.seo,
    title: homeData.pageTitle,
  };

  console.log('posts', blogPosts)

  return (
    <Layout data={seoObject}>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <WorkProcessSection />
      {testimonials && testimonials.length > 0 && (
        <TestimonialSection testimonials={testimonials} />
      )}
      <ClientSection />
      {blogPosts && blogPosts.length > 0 && (
        <BlogSection blogPosts={blogPosts} />
      )}
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getHomePageData();
  const testimonials = await getAllTestimonials();
  const blogPosts = await getRelatedBlogPosts(4);

  return {
    props: {
      homeData: data,
      testimonials,
      blogPosts,
    },
  };
}
