import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"

import { CardElections } from "../components/CardElections"

import { NavBar } from "../components/NavBar"

const drawerWidth = 240

export const ElectionsLayout = ({children}) => {


  return (
    <Box sx={{ display:'flex' }} className='animate__animated animate__fadeIn animate__faster'>
      <NavBar drawerWidth={drawerWidth}/>
      <Box direction='row' cols={3} component='main' sx={{flexGrow:1, p:3}} justifyContent='center'>
        <Toolbar />
        {/* <CardElections /> */}
        {children}
      </Box>

    </Box>
  )
}
