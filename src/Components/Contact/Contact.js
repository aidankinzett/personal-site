import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { Github, Twitter, Linkedin } from "grommet-icons";

const Contact = () => {
  const socials = [
    {
      component: Github,
      username: "@aidankinzett",
      link: "https://github.com/aidankinzett"
    },
    {
      component: Twitter,
      username: "@aidankinzett",
      link: "https://twitter.com/aidankinzett"
    },
    {
      component: Linkedin,
      username: "@aidankinzett",
      link: ""
    }
  ];

  return (
    <Box
      direction="column"
      gap="medium"
      pad="large"
      align="left"
      justify="center"
    >
      <Heading>Contact</Heading>
      <Heading level="3">I can be contacted at the following</Heading>
      {socials.map(item => (
        <Box direction="row" gap="small">
          <item.component />
          <Anchor href={item.link}>
            <Text>{item.username}</Text>
          </Anchor>
        </Box>
      ))}
    </Box>
  );
};

export default Contact;
