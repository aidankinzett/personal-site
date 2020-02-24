import React from "react";
import { Box, Heading, Button } from "grommet";
import { DocumentPdf } from "grommet-icons";
import { Link } from "react-router-dom"

function Resume() {
  return (
    <Box
      direction="column"
      gap="medium"
      pad="large"
      align="left"
      justify="center"
    >
      <Heading>Resume</Heading>
      <Box width="medium">
      <Link to="/files/resume.pdf" target="_blank" download>
        <Button
          primary
          icon={<DocumentPdf />}
          label="Download as PDF"
          onClick={() => {}}
        />
        </Link>
      </Box>

    </Box>
  );
}

export default Resume;
