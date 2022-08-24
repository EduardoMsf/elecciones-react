import { MenuOutlined, LogoutOutlined } from "@mui/icons-material"

import { AppBar, Grid, IconButton, SwipeableDrawer, Toolbar, Typography } from "@mui/material"
import { useState } from "react"


export const NavBar = ({ drawerWidth }) => {

  const [drawerSwitch, setDrawerSwitch] = useState(false)

  const handleClickDrawer = () =>{
    setDrawerSwitch(!drawerSwitch)
  }

  return (
    <AppBar position="fixed" 
      sx={{
        width:{sm:'100%'},
        ml:{ sm: `${ drawerWidth }px`}
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr:2}}
          onClick={handleClickDrawer}
        >
          <MenuOutlined />
        </IconButton>
        <SwipeableDrawer open={drawerSwitch} onClose={handleClickDrawer}>
          <Typography sx={{ width:'240px'}} variant='h6' noWrap component='div'>Elemento del drawer ahshjakakhsadadsdsdas</Typography>
        </SwipeableDrawer>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'>Elections App</Typography>

          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
