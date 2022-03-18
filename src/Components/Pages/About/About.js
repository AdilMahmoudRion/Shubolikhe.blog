import React from "react";
import { Link } from "react-router-dom";
import author2 from "../../Shared/Images/author-img2.jpg";
import author from "../../Shared/Images/authorimg.jpeg";
import facebook from "../../Shared/Images/social/facebook.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";
import twitter from "../../Shared/Images/social/twitter.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section py-4 lg:px-52 bg-white px-5">
        <div className="md:grid lg:grid-cols-3 md:gap-4 author-about">
          <div className="author-image col-span-2">
            <img src={author} alt="" />
          </div>
          <div className="author-information col-span-1 text-center">
            <h1 className="text-5xl font-bold pb-5 text-[#222222]">About Me</h1>

            <p className="about-me">
              Writing has such a power to aid someone to express almost all the
              feelings one experiences or may perceive, so I have chosen it. I
              want my thoughts to exist somewhere since human brain has
              limitations and we tend to forget things. Hope this will be a
              pleasant journey of journalizing my scribbled thoughts.
            </p>

            <div className="about-me-social-link-section">
              <Link to="#">
                <img className="about-social-icon" src={twitter} alt="" />
              </Link>
              <Link to="#">
                <img className="about-social-icon" src={facebook} alt="" />
              </Link>
              <Link to="#">
                <img
                  className="about-social-icon"
                  src={linkedin}
                  alt=""
                  srcSet=""
                />
              </Link>
              <Link to="#">
                <img className="about-social-icon" src={pinterest} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="author-introduction xl:px-40 lg:px-32 mt-10">
          <p className="py-4">
            I like to observe entities both living and non-living, this leads me
            to give shapes to my own ideas. I try to remain open to multiple
            interpretations. I like to talk. In this blog, I am writing about
            various things from my perspective/s so that I can talk to people,
            stay connected with the growing world.
          </p>
          <figure>
            <img className="author-img" src={author2} alt="" />
            <figcaption>Shubolikhe</figcaption>
          </figure>
          <p className="py-6">
            Lorem ipsum dolor sit amet, vix ut case porro facilisis, alia possit
            neglegentur vis te. Has cu eirmod abhorreant, vel civibus
            efficiantur cu. Eu summo elitr vix, iusto putant maluisset per ut,
            ne etiam vivendum adipisci vel. Vis omnis tempor accusam ei, justo
            perpetua liberavisse cu qui. Saperet aliquando adipiscing ius ne, ne
            facer euripidis est. Pro mundi nostrum suavitate et.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
