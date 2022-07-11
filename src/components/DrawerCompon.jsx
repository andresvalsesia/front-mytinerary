import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon,Button } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import userActions from '../redux/actions/userActions';
import { ListItemText } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link as LinkRouter } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const DrawerCompon = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const navigation=useNavigate();
  const dispatch = useDispatch();
  let user= useSelector(store => store.userReducer.user)
  let PAGES = [];
  
  if(user) {
    PAGES= [{ name: "Home", to: "/index" }, { name: "Cities", to: "/cities" },{ name: 'Logout' }];
  }
  else{
    PAGES= [{ name: "Home", to: "/index" }, { name: "Cities", to: "/cities" },{ name: 'Login', to:"/login" }];
  }

  const logOutSession=() => {
    
     dispatch(userActions.signOutUser())
    navigation('/login')
    window.location.reload();
    
  }

  return (
    <>

      <Drawer open={openDrawer} 
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {
            PAGES.map((element, index) => {
              return (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    {
                      element.to ? (<LinkRouter className="link-drawer" to={element.to}><ListItemText>{element.name}</ListItemText></LinkRouter>)
                        :
                        <Button sx={{color:'white',fontWeight: 'bold', paddingRight:'25%'}} onClick={logOutSession}>{element.name}</Button>
                        
                    }


                  </ListItemIcon>

                </ListItemButton>
              )
            })
          }
          <ListItemButton>
            <ListItemIcon>
              <KeyboardBackspaceIcon onClick={() => setOpenDrawer(false)} sx={{ fontSize: '40px', color: 'white' }} />
            </ListItemIcon>
          </ListItemButton>
        </List>

      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      > <MenuIcon sx={{ fontSize: '2.4rem' }} />  </IconButton>

    </>
  )
}

export default DrawerCompon