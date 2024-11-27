import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        {/* Home page with sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Landing />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="project">
                <Project />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="footer">
                <Footer />
              </section>
            </>
          }
        />

        {/* Dynamic project detail route */}
        <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
