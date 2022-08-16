import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { ImageElections } from "../components/ImageElections"
import { NavBar } from "../components/NavBar"

const drawerWidth = 240

export const ElectionsLayout = () => {
  console.log('elections layout')
  return (
    <Box sx={{ display:'flex' }} className='animate__animated animate__fadeIn animate__faster'>
      <NavBar drawerWidth={drawerWidth}/>
      <Box component='main' sx={{flexGrow:1, p:3}}>
        <Toolbar />
        <ImageElections />
      </Box>

    </Box>
  )
}
