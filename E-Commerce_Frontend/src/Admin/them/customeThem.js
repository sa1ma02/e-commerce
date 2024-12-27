import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    mode: "dark", 
    primary: {
      main: '#9155FD',
    },
    secondary: {
      main: '#f48fb1',
    },
    white:{
      main:"#000"
    },
    text: { 
      primary: "#000000" 
    },
    orange:{
      main:"#ffdb0f"
    },
    
    background: {
      default: '',

      paper:'rgb(255, 255, 255)'
    },
  },
 
  
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9155FD',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const customerTheme = createTheme({
  palette: {
    mode: "light", 
    primary: {
      main: '#9155FD',
    },
    secondary: {
      main: '#f48fb1',
    },
    white:{
      main:"#fff"
    },
    orange:{
      main:"#ffdb0f"
    },
    
    background: {
      default: '',
 
      paper:"white"
    },
  },
 
  
});

export {customTheme,darkTheme,customerTheme};