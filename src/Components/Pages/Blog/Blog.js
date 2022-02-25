import React from "react";
import "./Blog.css";
import img1 from "../../Shared/Images/posts/20.jpg";
import img2 from "../../Shared/Images/posts/11.jpg";
import blog1 from "../../Shared/Images/posts/1.jpg";
import blog2 from "../../Shared/Images/posts/2.jpg";
import blog3 from "../../Shared/Images/posts/3.jpg";
import blog4 from "../../Shared/Images/posts/4.jpg";
import blog5 from "../../Shared/Images/posts/5.jpg";
import facebook from "../../Shared/Images/social/facebook.png";
import twitter from "../../Shared/Images/social/twitter.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import { Link } from "react-router-dom";

const blog = [
  {
    id: "1",
    title: "inimalism is something.",
    summary: `The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.
    The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web development as a single topic, somehow we ignore it and jump directly into writing HTML without thinking about this wide range of people who might use the end product.`,
    img: `${blog1}`,
  },
  {
    id: "2",
    title: "inimalism is something.",
    summary: `The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.
  The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web development as a single topic, somehow we ignore it and jump directly into writing HTML without thinking about this wide range of people who might use the end product.`,
    img: `${blog2}`,
  },
  {
    id: "3",
    title: "inimalism is something.",
    summary: `The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.
  The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web development as a single topic, somehow we ignore it and jump directly into writing HTML without thinking about this wide range of people who might use the end product.`,
    img: `${blog3}`,
  },
  {
    id: "4",
    title: "inimalism is something.",
    summary: `The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.
  The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web development as a single topic, somehow we ignore it and jump directly into writing HTML without thinking about this wide range of people who might use the end product.`,
    img: `${blog4}`,
  },
  {
    id: "5",
    title: "inimalism is something.",
    summary: `The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.
  The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web development as a single topic, somehow we ignore it and jump directly into writing HTML without thinking about this wide range of people who might use the end product.`,
    img: `${blog5}`,
  },
];

const Blog = () => {
  return (
    <>
      <div className="py-4 px-5 md:px-52 bg-white sm:px-1">
        <div class="grid md:grid-cols-3 sm:grid-cols-1  md:gap-10">
          <div class="blog-post-card sm:col-span-1 md:col-span-2">
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

          {blog.map((blog) => (
            <div class="blog-post-card col-span-1">
              <div className="blog-post-image">
                <img class="h-36" src={blog.img} alt="post 1" />
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
                {blog.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
