import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { getData } from "../../helpers"
import { CardElections } from "../components/CardElections"
import { ImageElections } from "../components/ImageElections"
import { NavBar } from "../components/NavBar"

const drawerWidth = 240

export const ElectionsLayout = () => {

  const images = getData()
  console.log(images)
  return (
    <Box sx={{ display:'flex' }} className='animate__animated animate__fadeIn animate__faster'>
      <NavBar drawerWidth={drawerWidth}/>
      <Box direction='row' cols={3} component='main' sx={{flexGrow:1, p:3}}>
        <Toolbar />
        <ImageElections />
        {/* { images.map(image => 
          <CardElections image={image} />
        )
          
        } */}
      </Box>

    </Box>
  )
}
