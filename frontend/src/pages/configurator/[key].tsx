import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import { Button, Grid } from '@mui/material';

type Props = {
  params: string;
}

export default function Configurator({params}: Props) {

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Button variant="text" component={Link} to="/car-selector" sx={{ textTransform: "none"}}>
               « back
          </Button>
        </Grid>
        <Grid item>
          Car configuration details {params}
        </Grid>
      </Grid>
    </Layout>
  );
}