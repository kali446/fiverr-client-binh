import React from "react";
import readingTime from "reading-time";
import Moment from "react-moment";

const BlogSection = ({ blogPosts }) => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 has-anim fade">
            <div className="section-title text-center mb-4">
              <p className="mb-2">Latest news</p>
              <h2 className="title text-dark">Our Blog Posts</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((blog, i) => {
            if (i === 0) {
              const blog1Stats = readingTime(blog.content);

              return (
                <div key={blog.id} className="col-lg-12 has-anim fade">
                  <article className="card blog-card blog-card-horizontal border-0 rounded-0">
                    <div
                      className="card-background"
                      style={{ backgroundColor: "#c11c3b" }}
                    ></div>

                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-6">
                        <a href="blog-single.html" className="card-image">
                          <img
                            loading="lazy"
                            src={blog.thumbnail.formats.large.url}
                            className="card-img rounded-0"
                            alt={blog.thumbnail.formats.large.name}
                          />
                        </a>
                      </div>
                      <div className="col-lg-6 mt-4 mt-sm-5 mt-lg-0">
                        <div className="card-body p-0 p-lg-4">
                          <span className="card-tag mb-3">
                            {blog.category.name}
                          </span>

                          <h3 className="card-title">
                            <a href="blog-single.html">{blog.title}</a>
                          </h3>
                          <p className="card-text">{blog.excerpt}</p>

                          <p className="card-meta mt-3">
                            <Moment format="ll">{blog.created_at}</Moment>{" "}
                            <span className="mx-2">—</span> {blog1Stats.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            } else {
              const stats = readingTime(blog.content);

              return (
                <div key={blog.id} className="col-lg-4 col-md-6 has-anim fade">
                  <article className="card blog-card border-0 rounded-0">
                    <div
                      className="card-background"
                      style={{ backgroundColor: "#0a11a8" }}
                    ></div>

                    <a href="blog-single.html" className="card-image">
                      <img
                        loading="lazy"
                        src={blog.thumbnail.formats.medium.url}
                        className="card-img rounded-0"
                        alt={blog.thumbnail.name}
                      />
                    </a>

                    <div className="card-body p-0 mt-4">
                      <span className="card-tag mb-3">
                        <a href="blogs-1-col.html">{blog.category.name}</a>
                      </span>

                      <h4 className="card-title">
                        <a href="blog-single.html">{blog.title}</a>
                      </h4>
                      <p className="card-text">{blog.excerpt}</p>

                      <p className="card-meta mt-3">
                        <Moment format="ll">{blog.created_at}</Moment>{" "}
                        <span className="mx-2">—</span> {stats.text}
                      </p>
                    </div>
                  </article>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
