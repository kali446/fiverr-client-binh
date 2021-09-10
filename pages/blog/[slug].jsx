import React from "react";
import Layout from "../../components/Layout";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import readingTime from "reading-time";
import {
  getSingleBlogPost,
  getRelatedBlogPosts,
} from "../../helpers/api-utils";

const SinglePost = ({ singleBlog, relatedBlogs }) => {
  const post = singleBlog[0];
  const filteredRelatedBlogs = relatedBlogs
    .filter((blog) => blog.id !== post.id)
    .splice(0, 3);

  let seoObject;
  if (post.seo) {
    seoObject = {
      ...post.seo,
      title: post.title,
    };
  } else {
    seoObject = {
      title: post.title,
      metaTitle: post.title,
      metaDescription: post.content,
    };
  }

  return (
    <Layout data={seoObject}>
      {/* page header */}
      <section class="page-header pb-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <div class="mt-0 mt-lg-4">
                <p class="mb-3 font-weight-500 has-anim fade">
                  {post.category.name}{" "}
                  <span class="mx-2 d-inline-block">━</span>{" "}
                  <Moment format="ll">{post.created_at}</Moment>
                </p>
                <h2 class="text-white font-weight-500 has-anim fade anim-delay-1">
                  {post.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* details */}
      <section class="section pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-n5 has-anim anim-delay-2">
              <img
                loading="lazy"
                class="img-fluid"
                src={`${post.thumbnail.url}`}
                alt={post.thumbnail.name}
              />
            </div>
          </div>
        </div>

        <div class="section bg-white">
          <div class="container">
            <div class="row justify-content-center pt-5">
              <div class="col-lg-9">
                {/* rendering the markdown content */}
                <div className="richText--content content">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredRelatedBlogs && filteredRelatedBlogs.length > 0 && (
          <div class="section pt-0 bg-white">
            <div class="container">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="section border-top pb-0"></div>
                  <h3 class="h2 text-dark font-weight-500 has-anim fade">
                    Related posts
                  </h3>
                </div>
                {filteredRelatedBlogs.map((blog) => {
                  const stats = readingTime(blog.content);

                  return (
                    <div key={blog.id} class="col-lg-4 col-md-6">
                      <article class="card blog-card border-0 rounded-0 has-anim fade anim-delay-2">
                        <div
                          class="card-background"
                          style={{ backgroundColor: "#296e4a" }}
                        ></div>

                        <Link href={`/blog/${blog.Slug}`}>
                          <a class="card-image">
                            <img
                              loading="lazy"
                              src={`${blog.thumbnail.formats.medium.url}`}
                              class="card-img rounded-0 custom-blogImageSize"
                              alt={blog.thumbnail.formats.medium.name}
                            />
                          </a>
                        </Link>

                        <div class="card-body p-0 mt-4">
                          <span class="card-tag mb-3">
                            <a href={"#"}>{blog.category.name}</a>
                          </span>

                          <h4 class="card-title">
                            <Link href={`/blog/${blog.Slug}`}>
                              <a>{blog.title}</a>
                            </Link>
                          </h4>
                          <p class="card-text">{blog.excerpt}</p>

                          <p class="card-meta mt-3">
                            <Moment format="ll">{post.created_at}</Moment>{" "}
                            <span class="mx-2">—</span> {stats.text}
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SinglePost;

export async function getServerSideProps({ params: { slug } }) {
  const singleBlog = await getSingleBlogPost(slug);
  const relatedBlogs = await getRelatedBlogPosts(4);

  return {
    props: {
      singleBlog,
      relatedBlogs,
    },
  };
}
