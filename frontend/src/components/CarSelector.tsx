import React, { useEffect } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useCarConfigurationContext } from '../wrappers/CarConfiguratorWrapper';
import CategorySelector from './CategorySelector';
import CarCard from './CarCard';
import { Category, Model } from '../types/Types';

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function CarSelector() {
  
  const carConfigurator = useCarConfigurationContext()
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('Unknown');
  const [filteredModels, setFilteredModels] = React.useState<Model[]>([]);
  
  useEffect(() => {
    setFilteredModels(carConfigurator.configurator.models);
  }, [])
  
  useEffect(() => {
    if (selectedCategory === 'Unknown') {
      setFilteredModels(carConfigurator.configurator.models);
    } else {
      const _models = carConfigurator.configurator.models.filter(model => model.categories.includes(selectedCategory));
      setFilteredModels(_models);
    }
  }, [selectedCategory])
  
  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  }
  
  return (
    <BoxContainer>
      <Box>
        <Typography variant="h3" color="secondary">Choose you car</Typography>
      </Box>
      <CategorySelector onSelectCategory={handleSelectCategory}/>
      <Box display="flex" maxWidth="1200px" flexWrap="wrap">
        {filteredModels.map((item, idx) => (
            <CarCard key={idx} model={item} />
        ))}
      </Box>
    </BoxContainer>
  )
}