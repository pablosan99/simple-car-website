import * as React from "react"
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from 'gatsby';
import { Box, Button, Typography } from '@mui/material';

const IndexPage = () => {

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Hero/>
        <Box mt={2}>
          <Button variant="contained" color="secondary" component={Link} to="/car-selector">
            <Typography variant="body1">
              Configurator
            </Typography>
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
