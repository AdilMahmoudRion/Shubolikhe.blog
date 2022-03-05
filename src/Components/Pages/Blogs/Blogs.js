import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import BlogsPage from "./BlogsPage";

const Blogs = () => {
  return (
    <>
      <Navigation></Navigation>
      <BlogsPage></BlogsPage>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
