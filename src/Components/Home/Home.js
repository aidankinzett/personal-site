import React from "react";
import { Box, Heading, Paragraph, Anchor } from "grommet";
import EmojiWave from "./../EmojiWave/EmojiWave";

function Home() {
  return (
    <Box flex align="center" justify="center" pad="large">
      <Heading>
        Hey, I'm Aidan Kinzett <EmojiWave />
      </Heading>
      <Paragraph>
        I am a software developer in Brisbane, Australia. I work at{" "}
        <Anchor href="https://nationaldrones.com">National Drones</Anchor>{" "}
        on Smartdata.
      </Paragraph>
    </Box>
  );
}

export default Home;
