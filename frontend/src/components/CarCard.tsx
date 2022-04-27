import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Model } from '../types/Types';

type Props = {
  model: Model;
}

export default function CarCard(props: Props) {

  const { model } = props;
  
  const handleClick = async () => {
    await navigate(`./configurator/${model.code}`);
  }

  return (
    <Card sx={{
      margin: 2
    }}
    >
      <CardActionArea>
        <StaticImage
          src={"../images/car-2.jpg"}
          alt={model.name}
          width={250}
          height={150}
        />
        <CardContent>
          <Typography variant="body1">{model.name}</Typography>
          <Link to={`/${model.code}`}>See more ...</Link>
          <Box>
            <Typography variant="caption">Price from 1000zł</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}