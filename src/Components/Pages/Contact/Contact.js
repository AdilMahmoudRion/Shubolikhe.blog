import React from "react";
import Footer from "../../Shared/Footer/Footer";
import author from "../../Shared/Images/contact.jpg";
import Navigation from "../../Shared/Navigation/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="py-4 px-5 lg:px-52 bg-white">
        <div className="md:grid lg:grid-cols-3 md:gap-4">
          <div className="author-image col-span-2">
            <img src={author} alt="" />
          </div>
          <div className="author-information col-span-1 text-center">
            <h1 className="text-5xl font-bold pb-5 text-[#222222]">
              Contact Me
            </h1>
          </div>
        </div>
        <div className="author-introduction lg:px-56 mt-10">
          <p className="py-4">
            Sorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            cupiditate unde consequuntur aperiam earum, . Magni facere
            exercitationem tempora possimus id ullam quibusdam ratione
            consequatur sunt iusto neque quasi recusandae obcaecati saepe nisi,
            sit, excepturi rem optio quas enim accusamus nobis. Accusantium
            eaque necessitatibus perspiciatis quia vitae non accusamus!
          </p>

          <form>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-[#2e2e2eee] bg-transparent border-0 border-b-2 border-gray-300 appearance-none     focus:outline-none focus:ring-0 focus:border-[#b70038] peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#b70038]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-[#2e2e2eee] bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#b70038] peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#b70038]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                rows="6"
                type="text"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-300 focus:outline-none focus:ring-0 focus:border-[#b70038] peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#b70038] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-[#b70038]  focus:ring-4 focus:ring-[#b70038] font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
