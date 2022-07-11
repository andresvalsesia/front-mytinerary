import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Tooltip, Box, Button } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import DrawerCompon from './DrawerCompon';
import {useDispatch,useSelector} from 'react-redux';
import { useMediaQuery, useTheme } from '@mui/material';
import mundo from '../images/mundo.png';
import userActions from '../redux/actions/userActions'
import Typography from '@mui/material/Typography'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Avatar from '@mui/material/Avatar';
import { Link as LinkRouter} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch=useDispatch();
  const navigation=useNavigate();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const settings = ['Login', 'Logout'];


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutSession= () => {
    
    dispatch(userActions.signOutUser())
    navigation('/login')
    window.location.reload();
    
  }


  let user= useSelector(store => store.userReducer.user)
 
  return (
    <>
      <AppBar sx={{ backgroundColor: '#354259' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {
            match ? (
              <>
                <Typography className="title-navbar" sx={{ fontSize: "2.5rem", paddingLeft: "10%", color: 'white' }}>
                  MyTinerary
                </Typography>
                <DrawerCompon />
              </>
            ) : (

              <>
                <Typography sx={{ fontSize: "3rem" }}>
                  MyTinerary <TravelExploreIcon sx={{ fontSize: "50px" }} />
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '40%', paddingRight: '15rem' }}>

                  <LinkRouter className="link" to="/index"><button className="btn-navbar"
                  >
                    Home</button></LinkRouter>
                  <LinkRouter className="link" to="/cities"><button className="btn-navbar"
                  >
                    Cities</button></LinkRouter>

                </Box>


                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                    {user ?<Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                          
                          <Avatar sx={{outline:'1px solid black'}} alt="Remy Sharp" src={user.photoUser} /> 
                          <Typography color="white">Welcome {user.name}</Typography> 
                           </Box> 
                      : <Avatar sx={{outline:'1px solid white'}} alt="Remy Sharp" src={mundo}/>
                     }
                    
                  </IconButton>
                </Tooltip>

                {user ?
                    
                    <Menu
                    sx={{ mt: '58px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                   
                      <MenuItem onClick={handleCloseUserMenu}>
                      
                       <Button sx={{color:'white',fontWeight: 'bold'}} onClick={logOutSession}><Typography sx={{ fontWeight: 'bold',marginTop:'0.8rem'}} color="white" textAlign="center">LogOut</Typography></Button> 
                       
                      </MenuItem>
                   
                  </Menu>

                  :  <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  
                    <MenuItem  onClick={handleCloseUserMenu}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                           
                      <LinkRouter className="link"to="/register"><Typography sx={{ fontWeight: 'bold',marginTop:'0.8rem'}} color="white" textAlign="center">SignUp</Typography></LinkRouter>
                      <LinkRouter className="link"to="/login"><Typography sx={{ fontWeight: 'bold',marginTop:'1.5rem'}} color="white" textAlign="center">LogIn</Typography></LinkRouter>  

                      </Box>
                      
                      
                      
                    </MenuItem>
                
                </Menu>
                
                
                }

               
              </>
            )
          }


        </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar


