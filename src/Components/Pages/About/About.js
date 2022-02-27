import React from "react";
import "./About.css";
import author from "../../Shared/Images/author.jpg";
import author2 from "../../Shared/Images/author-img2.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import facebook from "../../Shared/Images/social/facebook.png";
import twitter from "../../Shared/Images/social/twitter.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";

const About = () => {
  return (
    <>
      <section className="about-section py-4 lg:px-52 bg-white px-5">
        <div className="md:grid lg:grid-cols-3 md:gap-4">
          <div className="author-image col-span-2">
            <img src={author} alt="" />
          </div>
          <div className="author-information col-span-1 text-center">
            <h1 className="text-5xl font-bold pb-5 text-[#222222]">About Me</h1>

            <p className="about-me">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, quasi iusto, provident eos eaque architecto libero
              odit omnis esse, beatae cumque quo numquam harum nam facilis
              voluptatem deserunt aliquid. Ab, sequi odit dolore iure, mollitia
              corporis ea dignissimos eligendi facilis autem aliquam voluptates
              suscipit, fugit reiciendis vel aut animi consequatur. Dolor
              repellendus eius similique possimus perspiciatis numquam!
              Necessitatibus nulla natus labore id tempore!
            </p>

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
        <div className="author-introduction lg:px-48 mt-10">
          <p className="py-4">
            Sorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            cupiditate unde consequuntur aperiam earum, . Magni facere
            exercitationem tempora possimus id ullam quibusdam ratione
            consequatur sunt iusto neque quasi recusandae obcaecati saepe nisi,
            sit, excepturi rem optio quas enim accusamus nobis. Accusantium
            eaque necessitatibus perspiciatis quia vitae non accusamus!
          </p>
          <figure>
            <img class="author-img" src={author2} alt="" />
            <figcaption>Shubolikhe</figcaption>
          </figure>
          <p class="py-6">
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
