import React from 'react';
import { Paper, styled } from '@mui/material';

type Props = {
  children?: JSX.Element;
}

const CarPaper = styled(Paper)(({theme}) => ({
  border: `1px solid ${theme.palette.grey[100]}`
}));

export default function Content(props: Props) {
  return (
    <CarPaper elevation={2}>
      {props.children}
    </CarPaper>
  )
}