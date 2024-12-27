import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IMAGES from '../../../src/Images/index';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
export default function AdminNavbar({handleSideBarViewInMobile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const isMenuOpen = Boolean(anchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);

  };






  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + isLargeScreen, backgroundColor: 'rgb(255, 255, 255)' }}>
      <Toolbar > 
        <Avatar alt="Femsha" src={IMAGES.imgTwo} sx={{ marginLeft: '300px' }} style={{ width: '60px', height: '60px' }}/> 
        <Typography variant="body1" color="brown" style={{ marginLeft: '200px', fontSize: '50px',fontStyle: 'italic' , fontWeight: 'bold' }}>E-Clothes</Typography>
  
      </Toolbar>
    </AppBar>
  </Box>
  )  
}