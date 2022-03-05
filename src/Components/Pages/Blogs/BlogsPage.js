import React from "react";
import { Link, useParams } from "react-router-dom";
import Server from "../../Hooks/Server";
import facebook from "../../Shared/Images/social/facebook.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import twitter from "../../Shared/Images/social/twitter.png";

const BlogsPage = () => {
  const { query } = useParams();

  const { HandleTagBlog, tagBlog } = Server();
  HandleTagBlog(query);
  console.log(tagBlog);

  return (
    <section className="blog-section py-4 px-5 lg:px-52 bg-white">
      {tagBlog.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-1  md:gap-10">
          {tagBlog.map((blog) => (
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
      ) : (
        <div className="bg-[#f0f0f0ee] w-full h-72 text-center font-bold text-2xl py-24">
          <h1>Nothing Uploaded Any Blog</h1>
        </div>
      )}
    </section>
  );
};

export default BlogsPage;
