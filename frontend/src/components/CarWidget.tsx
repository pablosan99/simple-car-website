import { Box, Grid, Typography } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

type Props = {
  node: { id: number, frontmatter: { title: string, description: string } };
  imgNode: { childImageSharp: any};
}

export default function CarWidget({ imgNode, node }: Props) {
  const img = getImage(imgNode.childImageSharp);
  return (
    <Grid item container key={node.id} xs={false} sm={6} md={4}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-around" sx={{
          border: `1px solid #e0e0e0`,
          minHeight: '350px'
        }}>
          <Box flex={1} p={2} sx={{
            backgroundColor: `#ede8e8`,
          }}>
            <Typography variant="body1">{node.frontmatter.title}</Typography>
            <Typography variant="caption">{node.frontmatter.description}</Typography>
          </Box>
          <Box display="flex" flex={1}>
            <GatsbyImage alt={""} image={img!}/>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}