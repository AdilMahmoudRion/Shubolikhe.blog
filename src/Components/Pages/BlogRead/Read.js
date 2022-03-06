import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Server from "../../Hooks/Server";
import author2 from "../../Shared/Images/author-img2.jpg";
import authorImg from "../../Shared/Images/authorimg.jpeg";
import linkedin from "../../Shared/Images/social/linkedin.png";
import copy from "../../Shared/Images/social/s.copy.png";
import facebook from "../../Shared/Images/social/s.facebook.png";
import email from "../../Shared/Images/social/s.mail.png";
import pinterest from "../../Shared/Images/social/s.pinterest.png";
import twitter from "../../Shared/Images/social/s.twitter.png";
import "./Read.css";

const Read = () => {
  const { id } = useParams();
  const { blog, readBlog, HandleReadBlog } = Server();
  HandleReadBlog(id);

  return (
    <article className="py-4 px-5 lg:px-52 bg-white">
      <div className="md:grid lg:grid-cols-3 widget">
        <div className="author-image col-span-2">
          <img src={readBlog?.img} alt="images" />
        </div>
        <div className="c-post-hero__content col-span-1 ">
          <h1 className="c-post-hero__title">{readBlog?.title}</h1>
          <div className="c-post-hero__meta">{readBlog?.date}</div>
        </div>
      </div>
      <div>
        <div className="md:grid grid-cols-3">
          <div className="author-introduction col-span-1 md:col-span-2 lg:col-span-2 lg:pr-10  pt-8">
            <div
              className="post__description"
              dangerouslySetInnerHTML={{ __html: readBlog?.blog }}
            />
            <div className="o-grid">
              <div className="o-grid__col o-grid__col--4-4-s o-grid__col--4-4-m o-grid__col--2-4-l">
                <div className="c-tags">
                  <Link className="c-tags-link" to="/tag/travel/">
                    Travel
                  </Link>
                  <Link className="c-tags-link" to="/tag/lifestyle/">
                    Lifestyle
                  </Link>
                  <Link className="c-tags-link" to="/tag/nature/">
                    Nature
                  </Link>
                </div>
              </div>
              <div className="o-grid__col o-grid__col--4-4-s o-grid__col--4-4-m o-grid__col--2-4-l">
                <ul className="c-share o-plain-list">
                  <li className="c-share__item">
                    <Link
                      to="#"
                      className="c-share__link c-share__link--twitter"
                      title="Share on Twitter"
                      aria-label="Share on Twitter"
                      href="https://twitter.com/share?text=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day&amp;url=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                      onClick="window.open(this.href, 'twitter-share', 'width=550, height=235'); return false;"
                    >
                      <div className="icon icon--ei-sc-twitter icon--s c-share__icon">
                        <img src={twitter} alt="" />
                      </div>
                    </Link>
                  </li>

                  <li className="c-share__item">
                    <Link
                      to="#"
                      className="c-share__link c-share__link--facebook"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                      onClick="window.open(this.href, 'facebook-share', 'width=580, height=296'); return false;"
                    >
                      <div className="icon icon--ei-sc-facebook icon--s c-share__icon">
                        <img src={facebook} alt="" />
                      </div>
                    </Link>
                  </li>

                  <li className="c-share__item">
                    <Link
                      to="#"
                      className="c-share__link  c-share__link--linkedin"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/&amp;title=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day"
                      onClick="window.open(this.href, 'linkedin-share', 'width=580, height=296'); return false;"
                    >
                      <div className="icon icon--ei-sc-linkedin icon--s c-share__icon">
                        <img src={linkedin} alt="" />
                      </div>
                    </Link>
                  </li>

                  <li className="c-share__item">
                    <Link
                      to="#"
                      className="c-share__link c-share__link--pinterest"
                      title="Share on Pinterest"
                      aria-label="Share on Pinterest"
                      href="http://pinterest.com/pin/create/button/?url=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/&amp;media=https://nubia.aspirethemes.com/content/images/2019/01/photo-1504454449875-92cfa39e1315.jpg&amp;description=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day"
                      onClick="window.open(this.href, 'pinterest-share', 'width=580, height=296'); return false;"
                    >
                      <div className="icon icon--ei-sc-pinterest icon--s c-share__icon">
                        <img src={pinterest} alt="" />
                      </div>
                    </Link>
                  </li>

                  <li className="c-share__item">
                    <Link
                      to="#"
                      className="c-share__link c-share__link--email"
                      title="Share via Email"
                      aria-label="Share via Email"
                      href="mailto:?subject=The%20reason%20we're%20gathered%20here%20on%20our%20God-given%2C%20much-naeeded%20day&amp;body=https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                    >
                      <div className="icon icon--ei-envelope icon--s c-share__icon">
                        <img src={email} alt="" />
                      </div>
                    </Link>
                  </li>

                  <li className="c-share__item">
                    <Link
                      to="#"
                      className="c-share__link c-share__link--clipboard"
                      title="Copy link"
                      aria-label="Copy link"
                      href="#"
                      data-clipboard-text="https://nubia.aspirethemes.com/the-reason-were-gathered-here-on-our-god-given-much-naeeded-day-of-rest-is-that-we-have-a-polish-hostage/"
                      onClick="return false;"
                    >
                      <div className="icon icon--ei-link icon--s c-share__icon">
                        <img src={copy} alt="" />
                      </div>
                    </Link>
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
              <h3 className="c-widget__title text-left">Recent Posts</h3>
              <>
                {blog.slice(0, 5).map((blog) => (
                  <div className="c-teaser" key={blog._id}>
                    <Link
                      to={`/read-blog/${blog._id}`}
                      className="c-teaser__content text-left"
                    >
                      <h3 className="c-teaser__title">{blog?.title}</h3>
                      <time
                        className="c-teaser__date"
                        dateTime="2017-03-27"
                        title="27 March 2017"
                      >
                        {`${blog.date?.slice(0, 12).concat("")}`}
                      </time>
                    </Link>
                    <div className="c-teaser__media">
                      <img
                        className="c-teaser__image ls-is-cached lazyloaded"
                        width="64"
                        height="48"
                        src={blog?.img}
                        alt="You got to cool that off. And that's the double-truth"
                      />
                    </div>
                  </div>
                ))}
              </>
            </div>
            <div className="c-widget">
              <h3 className="c-widget__title">Tags</h3>
              <div className="c-tags">
                <Link className="c-tags-link" to="/tag-blog/Education">
                  Education
                </Link>
                <Link className="c-tags-link" to="/tag-blog/Food">
                  Food
                </Link>
                <Link className="c-tags-link" to="/tag-blog/Lifestyle">
                  Lifestyle
                </Link>
                <Link className="c-tags-link" to="/tag-blog/Nature">
                  Nature
                </Link>
                <Link className="c-tags-link" to="/tag-blog/Travel">
                  Travel
                </Link>
                <Link className="c-tags-link" to="/tag-blog/Work">
                  Work
                </Link>
              </div>
            </div>
            <div className="c-widget">
              <h3 className="c-widget__title">Advertise</h3>

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
