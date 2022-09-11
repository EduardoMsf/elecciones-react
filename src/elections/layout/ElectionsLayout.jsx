import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"

import { NavBar } from "../components/NavBar"

const drawerWidth = 240

export const ElectionsLayout = ({children}) => {

  return (
    <Box  className='animate__animated animate__fadeIn animate__faster'>
      <NavBar drawerWidth={drawerWidth}/>
      <Box direction='row' cols={3} component='main' sx={{flexGrow:1, p:3}} justifyContent='space-between'>
        <Toolbar />
        {children}
      </Box>

    </Box>
  )
}
