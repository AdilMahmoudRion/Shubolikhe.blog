import Home from "./Components/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import AboutMe from "./Components/Pages/About/AboutMe";
import Tags from "./Components/Pages/Tags/Tags";
import Contact from "./Components/Pages/Contact/Contact";
import BlogRead from "./Components/Pages/BlogRead/BlogRead";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Tag from "./Components/Pages/Tags/Tag";
// import Backend from "./Components/Provider/Backend/Backend";

function App() {
  return (
    <>
      {/* <Backend> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="blog" element={<Tag />} />
          <Route path="contact" element={<Contact />} />
          <Route path="read-blog/:id" element={<BlogRead />} />
          <Route path="tag-blog/:query" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      {/* </Backend> */}
    </>
  );
}

export default App;
