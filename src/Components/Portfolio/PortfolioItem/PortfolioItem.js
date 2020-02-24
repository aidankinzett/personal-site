import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";

export default props => {
  return (
    <Box
      border={{ color: "neutral-3", size: "small" }}
      pad="medium"
      round
      direction="column"
      style={{ minHeight: "unset" }}
    >
      <Anchor href={props.item.link}>
        <Box direction="row" gap="small" align="baseline">
          <Heading level="2" style={{ marginTop: "5px" }}>
            {props.item.heading}
          </Heading>
          <props.item.icon />
        </Box>
      </Anchor>
      <Text>{props.item.description}</Text>
    </Box>
  );
};
