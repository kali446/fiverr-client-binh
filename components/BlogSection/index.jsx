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
            const stats = readingTime(blog.content);

            // random bg color
            const bgColors = ["#c11c3b", "#0a11a8", "#002306"];
            const randomColor = Math.floor(Math.random() * bgColors.length);

            return (
              <div key={blog.id} className="col-lg-4 col-md-6 has-anim fade">
                <article className="card blog-card border-0 rounded-0">
                  <div
                    className="card-background"
                    style={{ backgroundColor: `${bgColors[randomColor]}` }}
                  ></div>

                  <a href="blog-single.html" className="card-image">
                    <img
                      loading="lazy"
                      src={blog.thumbnail.formats.medium.url}
                      className="card-img rounded-0 custom-blogImageSize"
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
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
