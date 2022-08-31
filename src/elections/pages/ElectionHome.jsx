import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { ElectionsLayout } from "../layout/electionsLayout"
import './estilos.css'

const items = {...localStorage}
//console.log({items})
export const ElectionHome = () => {
//   const  randomNum = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// }

//   const  createBall = () =>{
//   let ball = document.createElement("div");
//   ball.className = "ball";
//   ball.style.backgroundColor = "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")";
//   ball.style.top = randomNum(570) + "px";
//   ball.style.left = randomNum(1080) + "px";
//   ball.addEventListener("animationend", function(event){
//     document.body.removeChild(event.target);
//   });
//   document.body.appendChild(ball);
// }

// setInterval(createBall, 300);

  const image1 = 'https://res.cloudinary.com/dheyjds01/image/upload/v1661963571/Candidatos/democracia.webp'
  const image2 = 'https://res.cloudinary.com/dheyjds01/image/upload/v1661963564/Candidatos/voto.png'

  return (
    <ElectionsLayout>
      <Typography align='center' variant='h4'>Elecciones Mundiales</Typography>
      <Box sx={{paddingLeft:'50px', paddingTop:'20px', paddingRight:'50px'}}>
        <Grid container display='grid' direction='column' sx={{gridTemplateColumns:'50% 50%', padding:'50px 0'}} >
          <Grid item sx={{gridColumnStart:1, gridColumnEnd:2}}>
            <Typography align="left" variant='h6'>Elecciones Mundiales</Typography>
            <Typography align="left" sx={{width:'100%'}} variant='body1'>
              Irure qui excepteur culpa sint occaecat sint consectetur enim consectetur dolor consequat pariatur   minim. Officia non sit laborum pariatur adipisicing quis exercitation quis. Aliqua ad commodo aute nisi   dolor officia incididunt sunt veniam adipisicing enim ipsum et minim. Qui commodo sit minim incididunt   anim et sunt. Occaecat incididunt pariatur proident est mollit dolor Lorem reprehenderit quis aliqua.   Minim ad veniam aliquip laboris sint.
  
              Deserunt nisi et ea nulla dolore. Amet non amet deserunt nisi ullamco ullamco Lorem sint aliqua sint ea   proident id. Ipsum dolore enim consequat commodo ut.
            </Typography>
          </Grid>
          <Grid item>
            <img src={image2} style={{width:'100%', borderRadius:'16px'}}/>
          </Grid>
        </Grid>
        <Grid display='grid' direction='column' sx={{gridTemplateColumns:'50% 50%'}} container>
          <Grid item sx={{gridColumnStart:1, gridColumnEnd:2, width:'100%'}}>
            <img src={image1} style={{width:'100%', height:'250px', objectFit:'cover', borderRadius:'16px'}}/>
          </Grid>
          <Grid item sx={{gridColumnStart:2, gridColumnEnd:3}} >
            <Typography align='right' variant="h6">¿Por qué es importante votar?</Typography>
            <Typography align="right" sx={{width:'100%'}} variant="body1">
              "No podemos dar por hecho la democracia. El derecho a votar es una de nuestras libertades más   importantes como individuos. Garantiza que tenemos voz y que nuestras voces se escuchan. Debemos   defender la idea de la democracia, y una de las mejores maneras de hacerlo es votando en las elecciones.
  
              En un mundo que está cada vez más globalizado, donde estamos más conectados que nunca más allá de las   fronteras, existen algunos problemas que sencillamente no pueden resolverse en solitario. El referéndum   del Brexit mostró que no podemos dar por hecho a la Unión Europea."</Typography>
          </Grid>
        </Grid>
      </Box>
    </ElectionsLayout>
  )
}
