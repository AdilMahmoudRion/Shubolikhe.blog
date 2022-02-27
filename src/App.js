import Home from "./Components/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import AboutMe from "./Components/Pages/About/AboutMe";
import Tags from "./Components/Pages/Tags/Tags";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="blog" element={<Tags />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
