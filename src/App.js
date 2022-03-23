import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/Pages/About/AboutMe";
import BlogRead from "./Components/Pages/BlogRead/BlogRead";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Tag from "./Components/Pages/Tags/Tag";
import ContactPage from "./Components/Pages/Contact/ContactPage";
import Error from "./Components/Shared/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="blog" element={<Tag />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="read-blog/:id" element={<BlogRead />} />
          <Route path="tag-blog/:query" element={<Blogs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
