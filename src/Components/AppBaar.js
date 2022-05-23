import React from 'react'
import './AppBaar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import TextField from '@mui/material/TextField';
// import CustomizedDialogs from './dialog'
import {Link} from "react-router-dom";
import Job from './JobBoard/Job';



const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000',
    },
    primary: {
      main: '#FFFFFF',
    },
  },
});

const AppBaar = () => {
  // Popup Code 
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // Popup Code 
  return (  
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="primary"
              sx={{ mr: 2 }}
            >
              <a startIcon={<ContactPhoneIcon/>}>  +91-99XXXXXXXX </a>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button variant="contained" color="success"> <Link to="/hireus">Hire Us</Link></Button>
            <Button color="inherit">Sale</Button>
            <Button color="inherit">Offer</Button>
            <Button color="inherit"><Link to="/support">Support</Link></Button>
          </Toolbar>

        </AppBar>
      </ThemeProvider>


      {/* Another Navbaar */}
      {/* <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <div className='SearchBaarr'>
              <TextField
                id="outlined-size-small"
                placeholder='Search'
                size="small" />
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <div className='grpbtn1'>
              <Button color="inherit"><CustomizedDialogs>Hey</CustomizedDialogs></Button>
              <Button clasName="crtbtn" variant="outlined" color="inherit">Create Account</Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
     */}
     <Job></Job>
    </Box>
  )
}

export default AppBaar