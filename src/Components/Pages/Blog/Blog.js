import React from "react";
import { Link } from "react-router-dom";
import Server from "../../Hooks/Server";
import facebook from "../../Shared/Images/social/facebook.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import twitter from "../../Shared/Images/social/twitter.png";
import "./Blog.css";

const Blog = () => {
  const { HomePageBlog, setPage, page, pageCount, isLoading } = Server();

  return (
    <>
      <section className="blog-section py-4 px-5 lg:px-52 bg-white">
        {isLoading && (
          <div class="text-center">
            <svg
              role="status"
              class="inline mr-2 w-8 h-8  animate-spin text-gray-600 fill-[#b70038]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
        <div className="grid md:grid-cols-3 sm:grid-cols-1  md:gap-6">
          {HomePageBlog.slice(0, 1).map((blog) => (
            <Link
              to={`/read-blog/${blog._id}`}
              className="blog-post-card sm:col-span-1 md:col-span-2 flex flex-col"
              key={blog?._id}
            >
              <div className="blog-post-image">
                <img src={blog?.img} alt="post 1" className="m-0" />
              </div>
              <div className="blog-post-title-section">
                <div className="blog-post-title ">
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
                <img src={blog?.img} alt="post 1" className="m-0" />
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
                <img className="m-0" src={blog?.img} alt="post 1" />
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
                      ? "py-2 px-3 leading-tight text-gray-500 bg-[#f4f6f8] border border-gray-300"
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
