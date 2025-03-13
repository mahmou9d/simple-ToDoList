import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Delete } from './context/ContextProvider';
import { Alert } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Navbar = () => {
   // @ts-ignore
  const {dltask,setDltask}= useContext(Delete)
  return (
    <>
      <Box sx={{ flexGrow: 1,bgcolor:"#00a9a9" }}>
      <AppBar position="static"sx={{borderRadius:"40px",bgcolor:"#19d2d01a"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontSize:"40px",fontFamily: "system-ui",display:"flex",justifyContent:"center" }}>
            Redux TO-DO App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {
                dltask ? <Alert variant="danger" onClose={() => setDltask(false)} dismissible>
                    <Alert.Heading>Your Task remove Succesfully   <DotLottieReact
      src="https://lottie.host/9e58ae14-a51a-450f-b06a-652fe1ba5bd4/w9av1sVUfN.lottie"
      loop
      autoplay
      style={{width:"250px"}}
    /></Alert.Heading>
                </Alert> : ""
            }
    </>
  )
}

export default Navbar
