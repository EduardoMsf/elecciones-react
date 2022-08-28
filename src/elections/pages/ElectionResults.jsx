import { Avatar, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { ImageElections } from "../components/ImageElections"

import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionResults = () => {
  
  const localStorageItems = { ...localStorage }
  //const items = Object.entries(localStorageItems).map( item => item[0])
  const { DragQueen, President, Vice, Senators } = localStorageItems
  const withOutPhoto = 'https://res.cloudinary.com/dheyjds01/image/upload/v1661725362/Candidatos/sin-perfil.jpg'

//   for (const item in localStorageItems) {
//     console.log(`${item}: ${localStorageItems[item]}`);
//   }
  const imagePre = JSON.parse(President) == 'undefined' ? withOutPhoto : JSON.parse(President)
  const imageVice = JSON.parse(Vice) == 'undefined' ? withOutPhoto : JSON.parse(Vice)
  const imageSen = JSON.parse(Senators) == 'undefined' ? withOutPhoto : JSON.parse(Senators)
  const imageDrag = JSON.parse(DragQueen) == 'undefined' ? withOutPhoto : JSON.parse(DragQueen)
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Mis votos</Typography>
      <Grid container spacing={1} alignItems='center'>
        <Grid item xs={6}>
          <ImageElections title='Presidente' image={imagePre}/>
        </Grid>
        <Grid item xs={6}>
          <ImageElections title='Vice Presidente' image={imageVice}/>
        </Grid>
        <Grid item xs={6}>
          <ImageElections title='Senador' image={imageSen}/>
        </Grid>
        <Grid item xs={6}>
          <ImageElections title='DragQueen' image={imageDrag}/>
        </Grid>      
      </Grid>
      {/* <List >
        <ListItem  alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={imagePre} />
          </ListItemAvatar>
          <ListItemText>
            Presidente
          </ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={imageVice} />
          </ListItemAvatar>
          <ListItemText>
            Vice Presidente
          </ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={imageSen} />
          </ListItemAvatar>
          <ListItemText>
            Senador
          </ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={imageDrag} />
          </ListItemAvatar>
          <ListItemText>
            DragaQueen
          </ListItemText>
        </ListItem>
      </List> */}
    </ElectionsLayout>
  )
}
