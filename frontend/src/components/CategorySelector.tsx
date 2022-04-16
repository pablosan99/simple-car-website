import { Box, FormControlLabel, Radio, RadioGroup, styled } from '@mui/material';
import React from 'react';
import { Category } from '../types/Types';


const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`

export default function CategorySelector() {
  
  const categories: Category[] = ["CombustionEngine", "ElectricEngine", "Hybrid", "City", "SUV", "GT"] 
  
  return (
    <Box display="flex" flexDirection="row" m={2}>
      <RadioGroupStyled defaultValue={"CombustionEngine"}>
      {
        categories.map((category, idx) => (
          <FormControlLabel key={idx} value={category} control={<Radio />} label={category} />
        ))
      }
      </RadioGroupStyled>
    </Box>
  )
}