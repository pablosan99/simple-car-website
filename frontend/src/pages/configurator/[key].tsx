import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import { Button, Grid } from '@mui/material';

type Props = {
  params: string;
}

export default function Configurator(props: Props) {
  console.log(props);
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Button variant="text" component={Link} to="/car-selector" sx={{ textTransform: "none"}}>
               « back
          </Button>
        </Grid>
        <Grid item>
          Car configuration details
        </Grid>
      </Grid>
    </Layout>
  );
}