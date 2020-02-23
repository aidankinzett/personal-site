import React from "react";
import { Heading, Box, Anchor } from "grommet";
import { Link } from "react-router-dom";

export default props => {
  const AppBar = props => (
    <Box
      direction="row"
      align="center"
      justify="center"
      color="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  return (
    <Box
      direction="row"
      justify="between"
      style={{ marginLeft: "25px", marginRight: "25px" }}
    >
      <Box direction="row">
        <Heading level="2">Aidan Kinzett</Heading>
        <Anchor alignSelf="center" style={{marginLeft: "20px"}} href="https://www.github.com/aidankinzett">
          @aidankinzett
        </Anchor>
      </Box>

      <AppBar>
        {Object.entries(props.pages).map(([name, path]) => (
          <Anchor key={path} as={Link} to={path} style={{ margin: "0 15px" }}>
            {name}
          </Anchor>
        ))}
      </AppBar>
    </Box>
  );
};
