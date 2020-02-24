import React from "react";
import { Heading, Box, Anchor, ResponsiveContext, Text } from "grommet";
import { Link } from "react-router-dom";
import { Github } from "grommet-icons";

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

  const size = React.useContext(ResponsiveContext);

  let navigationBar;

  navigationBar = (
    <Box
      direction={size === "small" ? "column" : "row"}
      justify={size === "small" ? "center" : "between"}
      align="center"
    >
      <Box direction="row">
        <Anchor as={Link} to="/" color="black">
          <Heading level="3">Aidan Kinzett</Heading>
        </Anchor>

        <Anchor
          alignSelf="center"
          style={{ marginLeft: "20px" }}
          href="https://www.github.com/aidankinzett"
          color="brand"
        >
          <Box direction="row" gap="xsmall">
            <Github />
            <Text>@aidankinzett</Text>
          </Box>
        </Anchor>
      </Box>

      <AppBar>
        {Object.entries(props.pages).map(([name, path]) => (
          <Anchor color="brand" key={path} as={Link} to={path} style={{ margin: "0 15px" }}>
            {name}
          </Anchor>
        ))}
      </AppBar>
    </Box>
  );

  return navigationBar;
};
