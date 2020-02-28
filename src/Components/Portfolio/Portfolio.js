import React from "react";
import { Box, Heading } from "grommet";

import PortfolioItem from './PortfolioItem/PortfolioItem'

function Portfolio(props) {
  return (
    <Box direction="column" gap="medium" pad="large" justify="between" style={{maxWidth: 800}}>
      <Heading>Portfolio</Heading>
      {props.portfolioItems.map(item => <PortfolioItem item={item} />)}
    </Box>
  );
}

export default Portfolio;
