import React from "react";
import { Link } from "react-router-dom";
import Server from "../../Hooks/Server";
import useServer from "../../Hooks/useServer";
import blog1 from "../../Shared/Images/posts/1.jpg";
import img2 from "../../Shared/Images/posts/11.jpg";
import blog2 from "../../Shared/Images/posts/2.jpg";
import img1 from "../../Shared/Images/posts/20.jpg";
import blog3 from "../../Shared/Images/posts/3.jpg";
import blog4 from "../../Shared/Images/posts/4.jpg";
import blog5 from "../../Shared/Images/posts/5.jpg";
import facebook from "../../Shared/Images/social/facebook.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import twitter from "../../Shared/Images/social/twitter.png";
import "./Blog.css";

const Blog = () => {
  const { blog } = Server();
  return (
    <>
      <section className="blog-section py-4 px-5 lg:px-52 bg-white">
        <div className="grid md:grid-cols-3 sm:grid-cols-1  md:gap-10">
          {blog.slice(0, 1).map((blog) => (
            <Link
              to={`/read-blog/${blog._id}`}
              className="blog-post-card sm:col-span-1 md:col-span-2"
            >
              <div className="blog-post-image">
                <img src={img1} alt="post 1" />
              </div>
              <div className="blog-post-title-section">
                <div className="blog-post-title">
                  <Link to="#" className="">
                    {blog?.category}
                  </Link>
                </div>

                <div className="blog-post-title-social-link">
                  <Link to="#">
                    <img className="social-icon" src={twitter} alt="" />
                  </Link>
                  <Link to="#">
                    <img className="social-icon" src={facebook} alt="" />
                  </Link>
                  <Link to="#">
                    <img
                      className="social-icon"
                      src={linkedin}
                      alt=""
                      srcSet=""
                    />
                  </Link>
                  <Link to="">
                    <img className="social-icon" src={pinterest} alt="" />
                  </Link>
                </div>
              </div>
              <Link to={`/read-blog/${blog._id}`} className="card-header">
                {`${blog?.title?.slice(0, 60).concat("..")}`}
              </Link>
              <div>
                <time
                  className="blog-published-time"
                  dateTime="2017-03-27"
                  title="27 March 2017"
                >
                  {blog?.date}
                </time>
              </div>
            </Link>
          ))}
          {blog.slice(1, 2).map((blog) => (
            <div className="blog-post-card col-span-1">
              <div className="blog-post-image">
                <img src={img2} alt="post 1" />
              </div>
              <div className="blog-post-title-section">
                <div className="blog-post-title">
                  <Link to="#" className="">
                    {blog?.category}
                  </Link>
                </div>

                <div className="blog-post-title-social-link">
                  <a href="#">
                    <img className="social-icon" src={twitter} alt="" />
                  </a>
                  <a href="#">
                    <img className="social-icon" src={facebook} alt="" />
                  </a>
                  <a href="">
                    <img
                      className="social-icon"
                      src={linkedin}
                      alt=""
                      srcSet=""
                    />
                  </a>
                  <a href="">
                    <img className="social-icon" src={pinterest} alt="" />
                  </a>
                </div>
              </div>
              <Link to={`/read-blog/${blog._id}`} className="card-header">
                {`${blog?.title?.slice(0, 40).concat("..")}`}
              </Link>
              <div>
                <time
                  className="blog-published-time"
                  dateTime="2017-03-27"
                  title="27 March 2017"
                >
                  {blog?.date}
                </time>
              </div>
            </div>
          ))}
          {blog.slice(3, blog.length).map((blog) => (
            <Link
              to={`/read-blog/${blog._id}`}
              className="blog-post-card-section col-span-1"
            >
              <div className="blog-post-image-section">
                <img className="" src={blog?.img} alt="post 1" />
              </div>
              <div className="blog-post-title-section">
                <div className="blog-post-title">
                  <Link to="#" className="">
                    {blog?.category}
                  </Link>
                </div>

                <div className="blog-post-title-social-link">
                  <Link to="#">
                    <img className="social-icon" src={twitter} alt="" />
                  </Link>
                  <Link to="facebook">
                    <img className="social-icon" src={facebook} alt="" />
                  </Link>
                  <Link to="#">
                    <img
                      className="social-icon"
                      src={linkedin}
                      alt=""
                      srcSet=""
                    />
                  </Link>
                  <Link to="#">
                    <img className="social-icon" src={pinterest} alt="" />
                  </Link>
                </div>
              </div>
              <Link to={`/read-blog/${blog._id}`} className="card-header">
                {`${blog?.title?.slice(0, 28).concat("..")}`}
              </Link>
              <div>
                <time
                  className="blog-published-time"
                  dateTime="2017-03-27"
                  title="27 March 2017"
                >
                  {blog?.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
