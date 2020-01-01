import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(
        result => {
          setData(result);
        },
        error => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <Header {...data.main} />
      <About {...data.main} />
      <Resume data={data.resume} />
      {/*<Portfolio data={data.portfolio} />*/}
      <Testimonials data={data.testimonials} />
      <Contact data={data.main} />
      <Footer {...data.main} />
    </div>
  );
};

export default App;
