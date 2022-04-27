import * as React from "react"
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from 'gatsby';
import { Box, Button, Typography } from '@mui/material';
import Cars from '../components/Cars';

const IndexPage = () => {

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Hero/>
        <Box mt={2}>
          <Button variant="contained" color="primary" component={Link} to="/car-selector">
            <Typography variant="body1">
              Configure Your Car
            </Typography>
          </Button>
        </Box>
        <Cars />
      </Box>
    </Layout>
  )
}

export default IndexPage
