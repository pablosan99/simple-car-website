import React from 'react';
import { Box, Drawer, List, ListItem, Typography } from '@mui/material';
import { Link } from 'gatsby';

type Props = {
  open: boolean;
  onClose: () => void;
}

export default function Menu(props: Props) {

  const {
    open,
    onClose
  } = props;
  
  const items = [
    {
      title: "Main",
      link: ""
    },
    {
      title: "Configurator",
      link: "car-selector"
    }
  ]

  const renderItems = () => {
    
    return (
      <Box
        role="presentation"
        sx={{
          marginTop: `3rem`
        }}
      >
        <List sx={{
          width: 300,
        }}>
          {items.map((item, idx) => (
            <ListItem key={idx}>
              <Link to={`/${item.link}`}>
                <Typography variant="h4">{item.title}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }

  const handleClose = () => {
    onClose();
  }

  return (
    <Drawer
      anchor={'left'}
      open={open}
      onClose={handleClose}
    >
      {renderItems()}
    </Drawer>
  )
}