import React from "react";
import Blog from "../Pages/Blog/Blog";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
};

export default Home;
