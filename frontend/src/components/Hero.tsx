import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Box } from '@mui/material';

export default function Hero() {
  return (
    <Box>
      <StaticImage
        src={"../images/car-3.jpg"}
        alt="Hero image"
        width={2200}
        height={550}
      />
    </Box>
  )
}