import React from "react";
import { Box, Grommet, Text, Image } from "grommet";
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
      topics: ["Vue.js", "Vuetify", "Vuex", "Vue Router", "Django"],
      icon: Domain,
      description: "Web platform for viewing and annotating images and 3D models created using images from drones.",
      link: "https://nationaldrones.com.au/smart-data/"
    },
    {
      heading: "FlirImageExtractor",
      topics: ["Python"],
      icon: Github,
      description: <Text>A small tool/lib to read temperatures and original photos from FLIR® thermal camera images.<br /><Image style={{ marginTop: "10px" }} src="https://img.shields.io/pypi/dm/flirimageextractor?style=flat-square"/></Text>,
      repo: "nationaldronesau/FlirImageExtractor"
    },
    {
      heading: "Freespeech",
      topics: ["Vue.js" , "Vuetify"],
      icon: Github,
      description: "An Augmented and Alternative Communication (AAC) web app to help a child who is not able to speak learn to communicate with those around them",
      repo: "Merkie/freespeech"
    },
    {
      heading: "Echodownloader",
      topics: ["Python", "Flask"],
      icon: Github,
      description: "Automatically download lecture recordings from QUT",
      repo: "aidankinzett/EchoDownloader"
    },
    {
      heading: "This Website",
      topics: ["React", "Grommet", "now.sh"],
      icon: Github,
      description: "This website is built using React, Grommet, and deployed with now.sh",
      // repo: "aidankinzett/personal-site"
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
