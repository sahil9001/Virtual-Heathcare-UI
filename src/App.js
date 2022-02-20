import React from "react";
import "./App.css";
import {
  Header,
  Articles,
  Download,
  Footer,
  Services,
  Testimonials,
  Healthcare,
} from "./containers";
import { Navbar } from "./components";
import header01 from "./assets/header01.svg";
import element02 from "./assets/element02.svg";
const App = () => {
  return (
    <div className="App">
      <div className="trfg__element-1">
        <img src={header01} alt="element" />
      </div>

      <div className="trfg__element-3">
        <img src={header01} alt="element" />
      </div>
      <div className="trfg__element-2">
        <img src={element02} alt="element" />
      </div>
      <Navbar />
      <Header />
      <Services />
      <Healthcare />
      <Download />
      <Testimonials />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
