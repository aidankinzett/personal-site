import React from "react";
import { Heading, Box, Anchor } from "grommet";
import { Link } from "react-router-dom";
import classes from "../Navigation/Navigation.module.css";

export default () => {
  const AppBar = props => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="center"
      color="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  const paths = {
    Home: "/",
    Portfolio: "/portfolio",
    Contact: "/contact"
  };

  return (
    <Box className={classes.NavContainer}>
      <Heading level="2" margin="none" alignSelf="center" color="#1c224c">
        Aidan Kinzett
      </Heading>
      <AppBar>
        {Object.entries(paths).map(([name, path]) => (
          <Anchor key={path} className={classes.NavLinks} as={Link} to={path}>
            {name}
          </Anchor>
        ))}
      </AppBar>
    </Box>
    // </div>
  );
};
