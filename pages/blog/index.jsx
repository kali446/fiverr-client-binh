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

                  // random bg color
                  const bgColors = [
                    "#c11c3b",
                    "#0a11a8",
                    "#002306",
                    "#d59801",
                    "#296e4a",
                  ];
                  const randomColor = Math.floor(
                    Math.random() * bgColors.length
                  );

                  return (
                    <div class="col-lg-4 col-md-6">
                      <article class="card blog-card border-0 rounded-0 has-anim">
                        <div
                          class="card-background"
                          style={{
                            backgroundColor: `${bgColors[randomColor]}`,
                          }}
                        ></div>

                        <a href="blog-single.html" class="card-image">
                          <img
                            loading="lazy"
                            src={`${blog.thumbnail.formats.medium.url}`}
                            class="card-img rounded-0 custom-blogImageSize"
                            alt={`${blog.thumbnail.formats.medium.name}`}
                          />
                        </a>

                        <div class="card-body p-0 mt-4">
                          <span class="card-tag mb-3">
                            <Link href={`#`}>
                              <a>{blog.category.name}</a>
                            </Link>
                          </span>

                          <h4 class="card-title">
                            <Link href={`/blog/${blog.Slug}`}>
                              <a>{blog.title}</a>
                            </Link>
                          </h4>
                          <p class="card-text">{blog.excerpt}</p>

                          <p class="card-meta mt-3">
                            <Moment format="ll">{blog.created_at}</Moment>{" "}
                            <span class="mx-2">—</span> {stats.text}
                          </p>
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
