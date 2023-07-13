import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Work/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import "./App.css";

function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode?'black':'',
      color:darkMode?'white':''
    }}>
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
