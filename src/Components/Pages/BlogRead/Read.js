import React from "react";
import "./Read.css";
import author from "../../Shared/Images/contact.jpg";
import author2 from "../../Shared/Images/author-img2.jpg";
import authorImg from "../../Shared/Images/authorimg.jpeg";
import facebook from "../../Shared/Images/social/s.facebook.png";
import twitter from "../../Shared/Images/social/s.twitter.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/s.pinterest.png";
import email from "../../Shared/Images/social/s.mail.png";
import copy from "../../Shared/Images/social/s.copy.png";
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
        <div className="md:grid grid-cols-3">
          <div className="author-introduction col-span-1 md:col-span-2 lg:col-span-2 lg:pr-10  pt-8">
            <p className="pb-4">
              ipsum dolor sit, amet consectetur adipisicing elit. Vitae
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
            <div class="o-grid">
              <div class="o-grid__col o-grid__col--4-4-s o-grid__col--4-4-m o-grid__col--2-4-l">
                <div class="c-tags">
                  <Link class="c-tags-link" to="/tag/travel/">
                    Travel
                  </Link>
                  <Link class="c-tags-link" to="/tag/lifestyle/">
                    Lifestyle
                  </Link>
                  <Link class="c-tags-link" to="/tag/nature/">
                    Nature
                  </Link>
                </div>
              </div>
              <div class="o-grid__col o-grid__col--4-4-s o-grid__col--4-4-m o-grid__col--2-4-l">
                <ul class="c-share o-plain-list">
                  <li class="c-share__item">
                    <a
                      class="c-share__link c-share__link--twitter"
                      title="Share on Twitter"
                      aria-label="Share on Twitter"
                      href="https://twitter.com/share?text=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day&amp;url=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                      onclick="window.open(this.href, 'twitter-share', 'width=550, height=235'); return false;"
                    >
                      <div class="icon icon--ei-sc-twitter icon--s c-share__icon">
                        <img src={twitter} alt="" />
                      </div>
                    </a>
                  </li>

                  <li class="c-share__item">
                    <a
                      class="c-share__link c-share__link--facebook"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                      onclick="window.open(this.href, 'facebook-share', 'width=580, height=296'); return false;"
                    >
                      <div class="icon icon--ei-sc-facebook icon--s c-share__icon">
                        <img src={facebook} alt="" />
                      </div>
                    </a>
                  </li>

                  <li class="c-share__item">
                    <a
                      class="c-share__link  c-share__link--linkedin"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/&amp;title=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day"
                      onclick="window.open(this.href, 'linkedin-share', 'width=580, height=296'); return false;"
                    >
                      <div class="icon icon--ei-sc-linkedin icon--s c-share__icon">
                        <img src={linkedin} alt="" />
                      </div>
                    </a>
                  </li>

                  <li class="c-share__item">
                    <a
                      class="c-share__link c-share__link--pinterest"
                      title="Share on Pinterest"
                      aria-label="Share on Pinterest"
                      href="http://pinterest.com/pin/create/button/?url=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/&amp;media=https://nubia.aspirethemes.com/content/images/2019/01/photo-1504454449875-92cfa39e1315.jpg&amp;description=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day"
                      onclick="window.open(this.href, 'pinterest-share', 'width=580, height=296'); return false;"
                    >
                      <div class="icon icon--ei-sc-pinterest icon--s c-share__icon">
                        <img src={pinterest} alt="" />
                      </div>
                    </a>
                  </li>

                  <li class="c-share__item">
                    <a
                      class="c-share__link c-share__link--email"
                      title="Share via Email"
                      aria-label="Share via Email"
                      href="mailto:?subject=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day&amp;body=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                    >
                      <div class="icon icon--ei-envelope icon--s c-share__icon">
                        <img src={email} alt="" />
                      </div>
                    </a>
                  </li>

                  <li class="c-share__item">
                    <a
                      class="c-share__link c-share__link--clipboard"
                      title="Copy link"
                      aria-label="Copy link"
                      href="#"
                      data-clipboard-text="https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                      onclick="return false;"
                    >
                      <div class="icon icon--ei-link icon--s c-share__icon">
                        <img src={copy} alt="" />
                      </div>
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
          <div className="col-span-1 text-center">
            <div className="c-widget text-center c-widget-author">
              <img
                className="c-widget-author__image "
                src={authorImg}
                alt="Author Images"
              />
              <h1 className="c-widget-author__title">
                <Link to="/">Phillip Reed</Link>
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
            <div class="c-widget">
              <h3 class="c-widget__title">Tags</h3>
              <div class="c-tags">
                <Link class="c-tags-link" to="/">
                  Education
                </Link>
                <Link class="c-tags-link" to="/">
                  Food
                </Link>
                <Link class="c-tags-link" to="/">
                  Lifestyle
                </Link>
                <Link class="c-tags-link" to="/">
                  Nature
                </Link>
                <Link class="c-tags-link" to="/">
                  Travel
                </Link>
                <Link class="c-tags-link" to="/">
                  Work
                </Link>
              </div>
            </div>
            <div class="c-widget">
              <h3 class="c-widget__title">Advertise</h3>

              <Link to="/" target="_blank">
                <img src={author2} alt="Image Alternative Text" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Read;
