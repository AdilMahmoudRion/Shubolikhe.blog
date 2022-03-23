import React from "react";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Tags from "../Pages/Tags/Tags";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Blog></Blog>
      <Tags></Tags>
      <About></About>
      <Contact />
      <Footer></Footer>
    </>
  );
};

export default Home;
