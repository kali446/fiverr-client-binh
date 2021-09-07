import React, { useState } from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import readingTime from "reading-time";
import Moment from "react-moment";
import Link from "next/link";
import { getBlogPageData, getAllBlogPosts } from "../../helpers/api-utils";
import { API_URL, PER_PAGE } from "../../config";

const blog = ({ blogData, blogs, page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  const seoObject = {
    ...blogData.seo,
    title: blogData.pageTitle,
  };

  const pageHeader = {
    name: blogData.pageHeader.name,
    title: blogData.pageHeader.title,
  };

  return (
    <Layout data={seoObject}>
      {/* page header */}
      <PageHeader name={pageHeader.name} title={pageHeader.title} />

      {/* blog list */}
      <div className="section pt-n30 bg-white">
        <div className="container">
          <div className="row">
            {/* rendering blog list */}
            {blogs && blogs.length > 0 ? (
              <>
                {blogs.map((blog) => {
                  const stats = readingTime(blog.content);

                  return (
                    <div key={blog.id} className="col-lg-12">
                      <article className="card blog-card blog-card-horizontal border-0 rounded-0 has-anim">
                        <div
                          className="card-background"
                          style={{ backgroundColor: "#d59801" }}
                        ></div>

                        <div className="row justify-content-center align-items-center">
                          <div className="col-lg-6">
                            <Link href={`/blog/${blog.Slug}`}>
                              <a className="card-image">
                                <img
                                  loading="lazy"
                                  src={`${blog.thumbnail.formats.medium.url}`}
                                  className="card-img rounded-0"
                                  alt="blog-post"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="col-lg-6 mt-4 mt-sm-5 mt-lg-0">
                            <div className="card-body p-0 p-lg-4">
                              <span className="card-tag mb-3">
                                <Link href={`#`}>
                                  <a>{blog.category.name}</a>
                                </Link>
                              </span>

                              <h3 className="card-title">
                                <Link href={`/blog/${blog.Slug}`}>
                                  <a>{blog.title}</a>
                                </Link>
                              </h3>
                              <p className="card-text">{blog.excerpt}</p>

                              <p className="card-meta mt-3">
                                <Moment format="ll">{blog.created_at}</Moment>
                                <span className="mx-2">—</span> {stats.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1>No blog found!</h1>
            )}

            <div className="col-lg-12 custom-pagination">
              {page > 1 && (
                <div className="button--prev">
                  <div className="text-center mt-5 pt-4 has-anim">
                    <a
                      href={`/blog?page=${page - 1}`}
                      className="btn btn-black"
                      data-text="Previous"
                    >
                      <span>Previous</span>
                    </a>
                  </div>
                </div>
              )}

              {page < lastPage && (
                <div className="button--next">
                  <div className="text-center mt-5 pt-4 has-anim">
                    <a
                      href={`/blog?page=${page + 1}`}
                      className="btn btn-black"
                      data-text="Next"
                    >
                      <span>Next</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;

export async function getServerSideProps({ query: { page = 1 } }) {
  const data = await getBlogPageData();
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/blogs/count`);
  const total = await totalRes.json();

  // Fetch events
  const blogs = await getAllBlogPosts(PER_PAGE, start);

  return {
    props: {
      blogData: data,
      blogs,
      page: +page,
      total,
    },
  };
}
