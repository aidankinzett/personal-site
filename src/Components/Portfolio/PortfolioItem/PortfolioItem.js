import React from "react";
import { Box, Heading, Text, Anchor, Image, ResponsiveContext } from "grommet";

export default props => {
  const size = React.useContext(ResponsiveContext);
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
          <Heading level="5">{props.item.topics.join(", ")}</Heading>
        </Box>
      </Anchor>
      <Text>{props.item.description}</Text>
      {props.item.repo && (
        <Anchor
          style={{ marginTop: "10px" }}
          href={`https://www.github.com/${props.item.repo}`}
        >
          <Image
            src={`https://gh-card.dev/repos/${props.item.repo}.svg`}
            alt={`GitHub card for the repo ${props.item.repo}`}
            fill={size === "small"}
          />
        </Anchor>
      )}
    </Box>
  );
};
