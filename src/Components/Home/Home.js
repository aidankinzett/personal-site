import React from "react";
import {
  Box,
  Heading,
  Paragraph,
  Anchor,
  Button,
  ResponsiveContext,
  Image
} from "grommet";
import EmojiWave from "./../EmojiWave/EmojiWave";
import { Link } from "react-router-dom";
import imageOfMe from "../../media/images/me.jpg";

function Home() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box direction="column">
      <Box flex align="center" justify="center" pad="medium">
        <Box
          height="small"
          width="small"
          round="full"
          style={{ overflow: "hidden" }}
          margin="large"
        >
          <Image fit="cover" src={imageOfMe} />
        </Box>
        <Heading>
          Hey, I'm Aidan Kinzett <EmojiWave />
        </Heading>

        <Paragraph textAlign={size !== "small" ? "center" : "left"}>
          I am a software developer in Brisbane, Australia. I work at{" "}
          <Anchor href="https://nationaldrones.com">National Drones</Anchor> on
          Smartdata.
        </Paragraph>
      </Box>
      <Box flex align="center" pad="small">
        <Button
          alignSelf={size !== "small" ? "center" : "left"}
          style={{ margin: "0 30px" }}
          href="https://www.github.com/aidankinzett"
          label="Check out my GitHub!"
          primary
        />
      </Box>
      <Box direction="row" gap="small" justify="center" wrap pad="medium">
        <Button as={Link} to="/portfolio" label="My Projects" />
        <Button as={Link} to="/contact" label="Contact Me" />
      </Box>
    </Box>
  );
}

export default Home;
