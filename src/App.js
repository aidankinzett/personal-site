import React from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

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
  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box fill>
          <Navigation />

          <Route path="/" exact>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <h1>Aidan Kinzett</h1>
              </Box>
            </Box>
          </Route>

          <Route path="/portfolio">
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <h1>My Portfolio</h1>
              </Box>
            </Box>
          </Route>

          <Route path="/contact">
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <h1>Contact</h1>
              </Box>
            </Box>
          </Route>
        </Box>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
