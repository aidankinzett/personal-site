import React from "react";
import { Box, Grommet } from "grommet";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import {Github, Domain} from "grommet-icons"

const theme = {
  global: {
    colors: {
      brand: "#1c7293",
      focus: "#9eb3c2"
    },
    font: {
      family:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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

  const portfolioItems = [
    {
      heading: "Smartdata",
      icon: Domain,
      description: "Web platform for viewing and annotating images and 3D models created using images from drones.",
      link: "https://nationaldrones.com.au/smart-data/"
    },
    {
      heading: "FlirImageExtractor",
      icon: Github,
      description: "A small tool/lib to read temperatures and original photos from FLIR® thermal camera images.",
      link: "https://github.com/nationaldronesau/FlirImageExtractor"
    },
    {
      heading: "Freespeech",
      icon: Github,
      description: "An Augmented and Alternative Communication (AAC) web app to help a child who is not able to speak learn to communicate with those around them",
      link: "https://github.com/Merkie/freespeech"
    },
    {
      heading: "Echodownloader",
      icon: Github,
      description: "Automatically download lecture recordings from QUT",
      link: "https://github.com/aidankinzett/EchoDownloader"
    },
    {
      heading: "This Website",
      icon: Github,
      description: "This website is build using React, Grommet, and deployed with now.sh",
      link: "https://github.com/aidankinzett/personal-site"
    }
  ];

  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box align="center">
          <Box width="xlarge" alignSelf="center" style={{paddingBottom: "20x"}}>
            <Navigation pages={pages} />
            <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/portfolio"
              render={props => (
                <Portfolio portfolioItems={portfolioItems} {...props} />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Redirect from="/projects" to="/portfolio" />
            </Switch>
          </Box>
        </Box>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
