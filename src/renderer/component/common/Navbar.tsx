import { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

type NavbarProps = {
  children: ReactNode;
};

const Navbar = (props: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{props.children}</Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
