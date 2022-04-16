import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useCarConfigurationContext } from '../wrappers/CarConfiguratorWrapper';
import CategorySelector from './CategorySelector';
import CarCard from './CarCard';

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function CarSelector() {
  
  const carConfigurator = useCarConfigurationContext()
  
  return (
    <BoxContainer>
      <Box>
        <Typography variant="h3" color="secondary">Choose you car</Typography>
      </Box>
      <CategorySelector />
      <Box display="flex" maxWidth="1200px" flexWrap="wrap">
        {carConfigurator.configurator.models.map((item, idx) => (
            <CarCard key={idx} model={item} />
        ))}
      </Box>
    </BoxContainer>
  )
}