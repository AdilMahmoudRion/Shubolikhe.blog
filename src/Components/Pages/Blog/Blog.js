import React from "react";
import "./Blog.css";
import img1 from "../../Shared/Images/posts/20.jpg";
import img2 from "../../Shared/Images/posts/11.jpg";
import facebook from "../../Shared/Images/social/facebook.png";
import twitter from "../../Shared/Images/social/twitter.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="py-4 px-5 md:px-52 bg-white sm:px-1">
        <div class="grid grid-cols-3  gap-10">
          <div class="blog-post-card col-span-2">
            <div className="blog-post-image">
              <img class="" src={img1} alt="post 1" />
            </div>
            <div className="blog-post-title-section">
              <div className="blog-post-title">
                <a href="#" className="">
                  travel
                </a>
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
                    srcset=""
                  />
                </a>
                <a href="">
                  <img className="social-icon" src={pinterest} alt="" />
                </a>
              </div>
            </div>
            <a href="#" className="card-header">
              Setting up your own Ghost
            </a>
          </div>
          <div class="blog-post-card col-span-1">
            <div className="blog-post-image">
              <img class="h-36" src={img2} alt="post 1" />
            </div>
            <div className="blog-post-title-section">
              <div className="blog-post-title">
                <a href="#" className="">
                  travel
                </a>
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
                    srcset=""
                  />
                </a>
                <a href="">
                  <img className="social-icon" src={pinterest} alt="" />
                </a>
              </div>
            </div>
            <a href="#" className="card-header">
              Setting up your own Ghost
            </a>
          </div>
          <div class="blog-post-card col-span-1">
            <div className="blog-post-image">
              <img class="h-36" src={img2} alt="post 1" />
            </div>
            <div className="blog-post-title-section">
              <div className="blog-post-title">
                <a href="#" className="">
                  travel
                </a>
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
                    srcset=""
                  />
                </a>
                <a href="">
                  <img className="social-icon" src={pinterest} alt="" />
                </a>
              </div>
            </div>
            <a href="#" className="card-header">
              Setting up your own Ghost
            </a>
          </div>
          <div class="col-span-1 bg-red-300">
            <h1>this is rion</h1>
          </div>
          <div class="col-span-1 bg-red-300">
            <h1>this is rion</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
