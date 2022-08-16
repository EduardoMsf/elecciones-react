import { MenuOutlined, LogoutOutlined } from "@mui/icons-material"

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({ drawerWidth }) => {

  console.log('navbar')
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
          sx={{ mr:2, display:{sm:'none'}}}
        >
          <MenuOutlined />
        </IconButton>
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
