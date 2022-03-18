import React from "react";
import { Link } from "react-router-dom";
import Server from "../../Hooks/Server";
import Footer from "../../Shared/Footer/Footer";
import blog1 from "../../Shared/Images/posts/1.jpg";
import blog2 from "../../Shared/Images/posts/2.jpg";
import blog3 from "../../Shared/Images/posts/3.jpg";
import blog4 from "../../Shared/Images/posts/4.jpg";
import blog5 from "../../Shared/Images/posts/5.jpg";
import blog6 from "../../Shared/Images/posts/6.jpg";
import blog7 from "../../Shared/Images/posts/7 - 7heiAgq.jpg";
import blog8 from "../../Shared/Images/posts/8.jpg";
import blog9 from "../../Shared/Images/posts/9.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Tags.css";

const tag = [
  {
    id: "1",
    title: "Books",
    img: `${blog1}`,
    url: `/tag-blog/`,
  },
  {
    id: "2",
    title: "Music",
    img: `${blog2}`,
    url: `/tag-blog/`,
  },
  {
    id: "3",
    title: "Food",
    img: `${blog3}`,
    url: `/tag-blog/`,
  },
  {
    id: "4",
    title: "Travel",
    img: `${blog4}`,
    url: `/tag-blog/`,
  },
  {
    id: "5",
    title: "Nature",
    img: `${blog5}`,
    url: `/tag-blog/`,
  },
  {
    id: "6",
    title: "Thoughts",
    img: `${blog6}`,
    url: `/tag-blog/`,
  },
  {
    id: "7",
    title: "Thoughts",
    img: `${blog7}`,
    url: `/tag-blog/`,
  },
  {
    id: "8",
    title: "Review",
    img: `${blog8}`,
    url: `/tag-blog/`,
  },
  {
    id: "9",
    title: "MovingPicture",
    img: `${blog9}`,
    url: `/tag-blog/`,
  },
];

const Tags = () => {
  // const { tagBlog } = Server();
  return (
    <>
      <article className="lg:mx-52 sm:px-0 py-3 pb-5">
        <div className="bg-[#f4f6f8] px-8 py-5 mb-8">
          <h1 className="text-2xl">Tags</h1>
        </div>
        <div className="grid px-5 md:px-0  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tag.map((tag) => (
            <Link
              to={tag.url.concat(tag.title)}
              className="tags-card col-span-1"
            >
              <img className="tags-image" src={tag.img} alt="post 1" />
              <h2 className="tags-title">
                {tag.title}{" "}
                {/* <span className="u-font-size-tiny">({tagBlog.length})</span> */}
              </h2>
            </Link>
          ))}
        </div>
      </article>
    </>
  );
};

export default Tags;
