import React from "react";
import { Box, Heading, Paragraph } from "grommet";
import EmojiWave from './../EmojiWave/EmojiWave'

function Home() {
  return (
    <Box flex align="center" justify="center">
      <Heading>Hey, I'm Aidan Kinzett <EmojiWave/></Heading>
      <Paragraph>
        I am a software developer in Brisbane, Australia. I work at National
        Drones and blah blah
      </Paragraph>
    </Box>
  );
}

export default Home;
