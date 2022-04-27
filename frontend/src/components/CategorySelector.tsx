import { Box, FormControlLabel, Radio, RadioGroup, styled } from '@mui/material';
import React from 'react';
import { Category } from '../types/Types';

const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`

export default function CategorySelector() {
  
  const categories: Category[] = ["CombustionEngine", "ElectricEngine", "Hybrid", "City", "SUV", "GT"] 
  
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const selectedCategory = value as Category;
    debugger;
  }
  
  return (
    <Box display="flex" flexDirection="row" m={2}>
      <RadioGroupStyled defaultValue={"CombustionEngine"} onChange={handleCategoryChange}>
      {
        categories.map((category, idx) => (
          <FormControlLabel key={idx} value={category} control={<Radio />} label={category} />
        ))
      }
      </RadioGroupStyled>
    </Box>
  )
}