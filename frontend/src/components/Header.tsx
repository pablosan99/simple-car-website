import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'gatsby';
import { test } from './Header.module.css'

type Props = {
  title: string;
  onToggleMenu: () => void;
}

export default function Header(props: Props) {
  
  const {
    title,
    onToggleMenu
  } = props;
  
  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onToggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Link to={"/"} className={test}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}