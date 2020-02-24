import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { Github, Twitter, Linkedin, Mail } from "grommet-icons";

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
    },
    {
      component: Mail,
      username: "hello@aidankinzett.com",
      link: "mailto:hello@aidankinzett.com"
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
      <Heading level="3">Contact me using one of the following</Heading>
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
