import theme from '../themes/theme';
import Header from './Header';
import Menu from './Menu';
import * as React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Content from './Content';

type Props = {
  children: JSX.Element
}

export default function Layout({children}: Props) {

  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleCloseMenu = () => {
    setOpenMenu(false)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Header title="Car Dealer website" onToggleMenu={handleToggleMenu}/>
      <Menu open={openMenu} onClose={handleCloseMenu}/>
      <Content>
        {children}
      </Content>
    </ThemeProvider>
  )
  
}