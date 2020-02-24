import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from './Components/Contact/Contact'
import Resume from "./Components/Resume/Resume";


const theme = {
  global: {
    colors: {
      brand: "#1c7293",
      focus: "#9eb3c2"
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      size: "18px",
      height: "20px"
    }
  }
};

function App() {
  // the page names and paths for the website
  const pages = {
    Portfolio: "/portfolio",
    Contact: "/contact",
    Resume: "/resume"
  };

  const portfolioItems = [{
    heading: "FlirImageExtractor"
    
  }]

  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box fill align="center">
          <Box fill="vertical" width="xlarge" alignSelf="center">
            <Navigation pages={pages} />
            <Route path="/" exact component={Home} />
            <Route path="/portfolio"  render={(props) => <Portfolio portfolioItems={portfolioItems} {...props}/>} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Box>
        </Box>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
