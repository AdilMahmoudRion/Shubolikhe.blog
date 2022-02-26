import React from "react";
import "./About.css";
import author from "../../Shared/Images/author.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import facebook from "../../Shared/Images/social/facebook.png";
import twitter from "../../Shared/Images/social/twitter.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";

const About = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="about-section py-4 px-5 md:px-52 bg-white sm:px-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="author-image col-span-2">
            <img src={author} alt="" />
          </div>
          <div className="author-information col-span-1 text-center">
            <h1 className="text-5xl font-bold pb-5">About Me</h1>
            <div>
              <p className="about-me">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quasi iusto, provident eos eaque architecto libero
                odit omnis esse, beatae cumque quo numquam harum nam facilis
                voluptatem deserunt aliquid. Ab, sequi odit dolore iure,
                mollitia corporis ea dignissimos eligendi facilis autem aliquam
                voluptates suscipit, fugit reiciendis vel aut animi consequatur.
                Dolor repellendus eius similique possimus perspiciatis numquam!
                Necessitatibus nulla natus labore id tempore!
              </p>
            </div>

            <div className="about-me-social-link-section">
              <a href="#">
                <img className="about-social-icon" src={twitter} alt="" />
              </a>
              <a href="#">
                <img className="about-social-icon" src={facebook} alt="" />
              </a>
              <a href="">
                <img
                  className="about-social-icon"
                  src={linkedin}
                  alt=""
                  srcset=""
                />
              </a>
              <a href="">
                <img className="about-social-icon" src={pinterest} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default About;
