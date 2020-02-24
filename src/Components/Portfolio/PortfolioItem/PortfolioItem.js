import React from 'react'
import {Box, Heading} from 'grommet'

export default (props) => {
    return (
        <Box border={{color:"neutral-3", size:"small"}} pad="medium" round>
            <Heading level="2">{props.item.heading}</Heading>
        </Box>
    )
}
