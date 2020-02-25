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
      <Anchor
        href={
          props.item.link
            ? props.item.link
            : `https://www.github.com/${props.item.repo}`
        }
      >
        <Box direction="row" gap="small" align="baseline">
          <Heading level="2" style={{ marginTop: "5px" }}>
            {props.item.heading}
          </Heading>
          <props.item.icon />
        </Box>
      </Anchor>
      <Text>{props.item.description}</Text>
      {props.item.repo && (
        <a
          style={{ marginTop: "10px" }}
          href={`https://www.github.com/${props.item.repo}`}
        >
          <img
            src={`https://gh-card.dev/repos/${props.item.repo}.svg`}
            alt={`GitHub card for the repo ${props.item.repo}`}
          />
        </a>
      )}
    </Box>
  );
};
