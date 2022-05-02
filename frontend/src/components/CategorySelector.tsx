import { Box, FormControlLabel, Radio, RadioGroup, styled } from '@mui/material';
import React from 'react';
import { Category } from '../types/Types';

const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`

type Props = {
  onSelectCategory: (category: Category) => void;
}

export default function CategorySelector(props: Props) {
  
  const categories: Category[] = ["CombustionEngine", "ElectricEngine", "Hybrid", "City", "SUV", "GT"] 
  
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const selectedCategory = value as Category;
    props.onSelectCategory(selectedCategory);
  }
  
  return (
    <Box display="flex" flexDirection="row" m={2}>
      <RadioGroupStyled defaultValue={undefined} onChange={handleCategoryChange}>
      {
        categories.map((category, idx) => (
          <FormControlLabel key={idx} value={category} control={<Radio />} label={category} />
        ))
      }
      </RadioGroupStyled>
    </Box>
  )
}