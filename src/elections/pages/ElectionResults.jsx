import { Grid, Typography } from "@mui/material"
import { CardResults } from "../components/CardResults"

import { ElectionsLayout } from "../layout/ElectionsLayout"

export const ElectionResults = () => {
  
  const localStorageItems = { ...localStorage }

  const { DragQueen, President, Vice, Senators } = localStorageItems

  const imagePre = President == undefined ? '' : JSON.parse(President)
  const imageVice = Vice == undefined ? '' : JSON.parse(Vice)
  const imageSen = Senators == undefined ? '' : JSON.parse(Senators)
  const imageDrag = DragQueen == undefined ? '' : JSON.parse(DragQueen)

  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Mis votos</Typography>
      <Grid container spacing={1} justifyContent='space-between'>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardResults title='Presidente' image={imagePre}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardResults title='Vice' image={imageVice}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardResults title='Senador' image={imageSen}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardResults title='DragQueen' image={imageDrag}/>
        </Grid>      
      </Grid>
    </ElectionsLayout>
  )
}
