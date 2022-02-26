import React from "react";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Blog></Blog>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default Home;
