import React from "react";
import "./Read.css";
import author from "../../Shared/Images/contact.jpg";
import author2 from "../../Shared/Images/author-img2.jpg";
import authorImg from "../../Shared/Images/authorimg.jpeg";
import { Link } from "react-router-dom";

const Read = () => {
  return (
    <article className="py-4 px-5 lg:px-52 bg-white">
      <div className="md:grid lg:grid-cols-3 widget">
        <div className="author-image col-span-2">
          <img src={author} alt="" />
        </div>
        <div class="c-post-hero__content col-span-1 ">
          <h1 class="c-post-hero__title">
            The reason we're gathered here on our God-given, much-naeeded day
          </h1>
          <div class="c-post-hero__meta">
            <time datetime="2015-12-22">22.Dec.2015</time> .
            <span>3 min read</span>
          </div>
        </div>
      </div>
      <div>
        <div className="md:grid lg:grid-cols-3">
          <div className="author-introduction col-span-1 md:col-span-2 lg:col-span-2 pr-10  pt-8">
            <p className="pb-4">
              Sorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              cupiditate unde consequuntur aperiam earum, . Magni facere
              exercitationem tempora possimus id ullam quibusdam ratione
              consequatur sunt iusto neque quasi recusandae obcaecati saepe
              nisi, sit, excepturi rem optio quas enim accusamus nobis.
              Accusantium eaque necessitatibus perspiciatis quia vitae non
              accusamus!
            </p>
            <figure>
              <img class="author-img" src={author2} alt="" />
              <figcaption>Shubolikhe</figcaption>
            </figure>
            <p class="py-6">
              Lorem ipsum dolor sit amet, vix ut case porro facilisis, alia
              possit neglegentur vis te. Has cu eirmod abhorreant, vel civibus
              efficiantur cu. Eu summo elitr vix, iusto putant maluisset per ut,
              ne etiam vivendum adipisci vel. Vis omnis tempor accusam ei, justo
              perpetua liberavisse cu qui. Saperet aliquando adipiscing ius ne,
              ne facer euripidis est. Pro mundi nostrum suavitate et.
            </p>
          </div>
          <div className="col-span-1 text-center">
            <div className="c-widget text-center c-widget-author">
              <img
                className="c-widget-author__image "
                src={authorImg}
                alt="Author Images"
              />
              <h1 className="c-widget-author__title">
                <Link to="#">Phillip Reed</Link>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, sit magna iracundia consectetuer eu,
                in ferri suscipit postulant vel. Et per sint solet verear.
              </p>
            </div>
            <div className="c-widget">
              <h3 class="c-widget__title text-left">Recent Posts</h3>
              <Link to="/home" class="c-teaser">
                <div class="c-teaser__content text-left">
                  <h3 class="c-teaser__title">
                    You got to cool that off. And that's the double-truth
                  </h3>
                  <time
                    class="c-teaser__date"
                    datetime="2017-03-27"
                    title="27 March 2017"
                  >
                    27.Mar.2017
                  </time>
                </div>
                <div class="c-teaser__media">
                  <img
                    class="c-teaser__image ls-is-cached lazyloaded"
                    width="64"
                    height="48"
                    src={author2}
                    alt="You got to cool that off. And that's the double-truth"
                  />
                </div>
              </Link>
              <Link to="/home" class="c-teaser">
                <div class="c-teaser__content text-left">
                  <h3 class="c-teaser__title">
                    You got to cool that off. And that's the double-truth
                  </h3>
                  <time
                    class="c-teaser__date"
                    datetime="2017-03-27"
                    title="27 March 2017"
                  >
                    27.Mar.2017
                  </time>
                </div>
                <div class="c-teaser__media">
                  <img
                    class="c-teaser__image ls-is-cached lazyloaded"
                    width="64"
                    height="48"
                    src={author2}
                    alt="You got to cool that off. And that's the double-truth"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Read;
