import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import blog1 from "../../Shared/Images/posts/1.jpg";
import blog2 from "../../Shared/Images/posts/2.jpg";
import blog3 from "../../Shared/Images/posts/3.jpg";
import blog4 from "../../Shared/Images/posts/4.jpg";
import blog5 from "../../Shared/Images/posts/5.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Tags.css";

const tag = [
  {
    id: "1",
    title: "Education",
    img: `${blog1}`,
    url: `/tag-blog/`,
  },
  {
    id: "2",
    title: "Lifestyle",
    img: `${blog2}`,
    url: `/tag-blog/`,
  },
  {
    id: "3",
    title: "Nature",
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
    title: "Something",
    img: `${blog5}`,
    url: `/tag-blog/`,
  },
  {
    id: "6",
    title: "Novel",
    img: `${blog5}`,
    url: `/tag-blog/`,
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
          {tag.map((tag) => (
            <Link
              to={tag.url.concat(tag.title)}
              className="tags-card col-span-1"
            >
              <img className="tags-image" src={tag.img} alt="post 1" />
              <h2 className="tags-title">
                {tag.title} <span className="u-font-size-tiny">(24)</span>
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
