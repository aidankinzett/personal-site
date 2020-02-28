import React from "react";
import { Box, Heading, Text, Anchor, Image, ResponsiveContext } from "grommet";

export default props => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      border={{ color: "grey", size: "medium", side: "top" }}
      pad={{
        vertical: "medium"
      }}
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
        <Box direction="column">
          <Box direction="row" gap="small" align="baseline">
            <Heading level="2" style={{ marginTop: 5, marginBottom: 0 }}>
              {props.item.heading}
            </Heading>
            <props.item.icon />
          </Box>
          <Heading level="6" style={{ margin: 0, marginBottom: 15 }}>
            {props.item.topics.join(", ")}
          </Heading>
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
