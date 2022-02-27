import React from "react";
import Footer from "../../Shared/Footer/Footer";
import "./Tags.css";
import Navigation from "../../Shared/Navigation/Navigation";
import blog1 from "../../Shared/Images/posts/1.jpg";
import blog2 from "../../Shared/Images/posts/2.jpg";
import blog3 from "../../Shared/Images/posts/3.jpg";
import blog4 from "../../Shared/Images/posts/4.jpg";
import blog5 from "../../Shared/Images/posts/5.jpg";
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
  {
    id: "6",
    title: "inimalism is something.",
    summary: `The important thing is that there is a wide range of people who might have some disabilities and by ignoring them you will make their life harder and they will end up leaving, but the web should be available to everyone.
  The problem comes with no awareness about it, no budget, or not learning about it at the start of learning about web development as a single topic, somehow we ignore it and jump directly into writing HTML without thinking about this wide range of people who might use the end product.`,
    img: `${blog5}`,
  },
];

const Tags = () => {
  return (
    <>
      <Navigation></Navigation>
      <article className=" px-5  lg:mx-52 sm:px-10">
        <div className="bg-[#f4f6f8] px-8 py-10 mb-8">
          <h1 className="text-2xl">Tags</h1>
        </div>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap">
          {blog.map((blog) => (
            <Link to="#" class="tags-card col-span-1">
              <img class="tags-image" src={blog.img} alt="post 1" />
              <h2 className="tags-title">
                Title <span class="u-font-size-tiny">(24)</span>
              </h2>
            </Link>
          ))}
        </div>
      </article>
      <Footer></Footer>
    </>
  );
};

export default Tags;
