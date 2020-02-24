import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from './Components/Contact/Contact'

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
  const [pages] = useState({
    Portfolio: "/portfolio",
    Contact: "/contact"
  });

  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box fill align="center">
          <Box fill="vertical" width="xlarge" alignSelf="center">
            <Navigation pages={pages} />
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Box>
        </Box>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
