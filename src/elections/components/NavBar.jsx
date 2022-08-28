import { Link as RouterLink } from 'react-router-dom'
import { MenuOutlined, LogoutOutlined, HomeOutlined } from "@mui/icons-material"
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { AppBar, Grid, IconButton, SwipeableDrawer, Toolbar, Typography, Link } from "@mui/material"
import { useState } from "react"


export const NavBar = ({ drawerWidth }) => {

  const [drawerSwitch, setDrawerSwitch] = useState(false)

  const handleClickDrawer = () =>{
    setDrawerSwitch(!drawerSwitch)
  }
  
  const handleRemoveVotes = () =>{
    localStorage.clear()
  }
  return (
    <AppBar position="fixed" 
      sx={{
        width:{sm:'100%'},
        ml:{ sm: `${ drawerWidth }px`}
      }}
      color='secondary'
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
        <SwipeableDrawer open={drawerSwitch} onClose={handleClickDrawer} onOpen={handleClickDrawer}>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/presidencia" 
            sx={{textDecoration:"none", width:'240px'}}
          >
            <IconButton>
              <TurnedInNotOutlinedIcon />
            </IconButton>
            Presidencia
          </Link>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/vice" 
            sx={{textDecoration:"none", width:'240px'}}
          >
            <IconButton>
              <TurnedInNotOutlinedIcon />
            </IconButton>
            Vice Presidencia
          </Link>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/senadores" 
            sx={{textDecoration:"none", width:'240px'}}
          >
            <IconButton>
              <TurnedInNotOutlinedIcon />
            </IconButton>
            Senadores
          </Link>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/drag" 
            sx={{textDecoration:"none", width:'240px'}}
          >
            <IconButton>
              <VolunteerActivismOutlinedIcon />
            </IconButton>
            DragQueen
          </Link>
        </SwipeableDrawer>
        <IconButton sx={{marginRight: '20px', marginTop: '5px'}}>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/" 
            sx={{textDecoration:"none"}}
          >
            <HomeOutlined color='white' />
          </Link> 
        </IconButton>
        <IconButton sx={{marginRight: '20px', marginTop: '5px'}}>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/graphs" 
            sx={{textDecoration:"none"}}
          >
            <AssessmentOutlinedIcon color='white' />
          </Link> 
        </IconButton>
        <IconButton sx={{marginRight: '20px', marginTop: '5px'}}>
          <Link 
            component={ RouterLink } 
            color="primary" 
            to="/results" 
            sx={{textDecoration:"none"}}
          >
            <AssignmentTurnedInOutlinedIcon color='white' />
          </Link> 
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'>Elections App</Typography>
          <IconButton color='black' onClick={handleRemoveVotes}>
            <Link 
              component={ RouterLink } 
              color="primary" 
              to="/" 
              sx={{textDecoration:"none"}}
            >
              <LogoutOutlined />
            </Link>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
