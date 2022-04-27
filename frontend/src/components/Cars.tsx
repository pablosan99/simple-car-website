import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Grid, Typography } from '@mui/material';
import CarWidget from './CarWidget';

export default function Cars() {

  const data = useStaticQuery(graphql`
   query getData {
      allMdx {
        nodes {
          frontmatter {
            date
            description
            title
          }
          id
          slug
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          name
          childImageSharp {
             gatsbyImageData(formats: JPG, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
  }
`)
  const {allMdx, allFile} = data;

  return (
    <div>
      <Box display="flex" justifyContent="center" m={4}>
        <Typography variant="h4">Cars</Typography>
      </Box>
      <Grid container spacing={1}>
        {allMdx.nodes.map((node: any, idx: number) => {
          const imgNode = allFile.nodes.find((x: any) => x.name == node.slug);
           return <CarWidget key={idx} node={node} imgNode={imgNode}/>
        })}
      </Grid>
    </div>
  )
}