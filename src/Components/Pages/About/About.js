import React from "react";
import "./About.css";
import author from "../../Shared/Images/author.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const About = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="about-section py-4 px-5 md:px-52 bg-white sm:px-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="author-image col-span-2">
            <img src={author} alt="" />
          </div>
          <div className="author-information col-span-1">
            <h1>About</h1>
            <div>
              <h1>shubolikhe.blog</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default About;
