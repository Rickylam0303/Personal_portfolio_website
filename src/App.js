import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <main className="main">
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
