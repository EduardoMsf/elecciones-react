import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { ElectionsLayout } from "../layout/ElectionsLayout"


export const ElectionHome = () => {
  const image1 = 'https://res.cloudinary.com/dheyjds01/image/upload/v1661963571/Candidatos/democracia.webp'
  const image2 = 'https://res.cloudinary.com/dheyjds01/image/upload/v1661963564/Candidatos/voto.png'

  return (
    <ElectionsLayout>
      <Typography align='center' variant='h4'>Elecciones Mundiales</Typography>
      <Box sx={{paddingLeft:'30px', paddingTop:'20px', paddingRight:'30px'}}>
        <Grid container display='flex' direction='row' sx={{padding:'50px 0'}} >
          <Grid item xs={12} sm={12} md={6} sx={{padding:'6px'}}>
            <Typography align="left" variant='h6' xs={12}>Elecciones Mundiales</Typography>
            <Typography align="left" sx={{width:'100%'}} variant='body1'>
              Irure qui excepteur culpa sint occaecat sint consectetur enim consectetur dolor consequat pariatur   minim. Officia non sit laborum pariatur adipisicing quis exercitation quis. Aliqua ad commodo aute nisi   dolor officia incididunt sunt veniam adipisicing enim ipsum et minim. Qui commodo sit minim incididunt   anim et sunt. Occaecat incididunt pariatur proident est mollit dolor Lorem reprehenderit quis aliqua.   Minim ad veniam aliquip laboris sint.
  
              Deserunt nisi et ea nulla dolore. Amet non amet deserunt nisi ullamco ullamco Lorem sint aliqua sint ea   proident id. Ipsum dolore enim consequat commodo ut.
              Prueba de despliegue continuo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{padding:'6px'}}>
            <img src={image2} style={{width:'100%', borderRadius:'16px'}}/>
          </Grid>
        </Grid>
        <Grid display='flex' direction='row' container>
          <Grid item sx={{width:'100%', p:'6px'}} xs={12} sm={12} md={6}>
            <img src={image1} style={{width:'100%', height:'250px', objectFit:'cover', borderRadius:'16px'}}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{padding:'6px'}}>
            <Typography align='center' variant="h6">¿Por qué es importante votar?</Typography>
            <Typography align="left" sx={{width:'100%'}} variant="body1">
              "No podemos dar por hecho la democracia. El derecho a votar es una de nuestras libertades más   importantes como individuos. Garantiza que tenemos voz y que nuestras voces se escuchan. Debemos   defender la idea de la democracia, y una de las mejores maneras de hacerlo es votando en las elecciones.
  
              En un mundo que está cada vez más globalizado, donde estamos más conectados que nunca más allá de las   fronteras, existen algunos problemas que sencillamente no pueden resolverse en solitario. El referéndum   del Brexit mostró que no podemos dar por hecho a la Unión Europea."</Typography>
          </Grid>
        </Grid>
      </Box>
    </ElectionsLayout>
  )
}
