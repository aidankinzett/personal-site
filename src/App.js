import React, { useState } from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'


const theme = {
  global: {
    colors: {
      brand: "#1c7293",
      focus: "#9eb3c2"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

function App() {

  // the page names and paths for the website
  const [pages] = useState({
    Home: "/",
    Portfolio: "/portfolio",
  });

  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box fill>
          <Navigation pages={pages} />
          <Route path="/" exact component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>          
        </Box>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
