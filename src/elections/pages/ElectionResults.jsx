import { Avatar, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { CardResults } from "../components/CardResults"
import { ImageElections } from "../components/ImageElections"

import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionResults = () => {
  
  const localStorageItems = { ...localStorage }
  //const items = Object.entries(localStorageItems).map( item => item[0])
  const { DragQueen, President, Vice, Senators } = localStorageItems

//   for (const item in localStorageItems) {
//     console.log(`${item}: ${localStorageItems[item]}`);
//   }

  const imagePre = President == undefined ? '' : JSON.parse(President)
  const imageVice = Vice == undefined ? '' : JSON.parse(Vice)
  const imageSen = Senators == undefined ? '' : JSON.parse(Senators)
  const imageDrag = DragQueen == undefined ? '' : JSON.parse(DragQueen)
//console.log(imagePre)
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Mis votos</Typography>
      <Grid container spacing={1} justifyContent='center'>
        <Grid item xs={6}>
          <CardResults title='Presidente' image={imagePre}/>
        </Grid>
        <Grid item xs={6}>
          <CardResults title='Vice' image={imageVice}/>
        </Grid>
        <Grid item xs={6}>
          <CardResults title='Senador' image={imageSen}/>
        </Grid>
        <Grid item xs={6}>
          <CardResults title='DragQueen' image={imageDrag}/>
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
