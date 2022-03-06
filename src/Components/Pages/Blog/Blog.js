import React from "react";
import { Link } from "react-router-dom";
import Server from "../../Hooks/Server";
import img2 from "../../Shared/Images/posts/11.jpg";
import img1 from "../../Shared/Images/posts/20.jpg";
import facebook from "../../Shared/Images/social/facebook.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import twitter from "../../Shared/Images/social/twitter.png";
import "./Blog.css";

const Blog = () => {
  const { HomePageBlog, setPage, page, pageCount } = Server();
  return (
    <>
      <section className="blog-section py-4 px-5 lg:px-52 bg-white">
        <div className="grid md:grid-cols-3 sm:grid-cols-1  md:gap-10">
          {HomePageBlog.slice(0, 1).map((blog) => (
            <Link
              to={`/read-blog/${blog._id}`}
              className="blog-post-card sm:col-span-1 md:col-span-2"
              key={blog?._id}
            >
              <div className="blog-post-image">
                <img src={blog?.img} alt="post 1" />
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
          {HomePageBlog.slice(1, 2).map((blog) => (
            <div className="blog-post-card col-span-1" key={blog?._id}>
              <div className="blog-post-image">
                <img src={blog?.img} alt="post 1" />
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
                  <Link to="#">
                    <img className="social-icon" src={pinterest} alt="" />
                  </Link>
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
          {HomePageBlog.slice(3, HomePageBlog.length).map((blog) => (
            <Link
              to={`/read-blog/${blog._id}`}
              className="blog-post-card-section col-span-1"
              key={blog?._id}
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
        <nav aria-label="" className="py-8">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => setPage(page - 1)}
                className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {[...Array(pageCount).keys()].map((number) => (
              <li>
                <button
                  key={number}
                  onClick={() => setPage(number)}
                  className={
                    number === page
                      ? "py-2 px-3 leading-tight text-gray-500 bg-[#bbb] border border-gray-300"
                      : "py-2 px-3 leading-tight text-gray-500 bg-[#ffffff71] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  }
                >
                  {number + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => setPage(page + 1)}
                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Blog;
