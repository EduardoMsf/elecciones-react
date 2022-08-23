
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getData } from '../../helpers';
import { CardContent, Grid, Typography } from '@mui/material';



export const CardElections = () => {

  const images = getData()
  return (
    <Grid display='flex' flexDirection='row' justifyContent='center'>{images.map( image =>
    (<Card cols={4} sx={{ width:'100%', margin:'16px'}}>
      <CardMedia
        display='flex'
        justifyContent='space-around'
        sx={{ width: '100%', height: 300 }}
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent sx={{margin:'0', padding:'5px'}}>
        <Typography align='center' gutterBottom variant="h5" component="div">
          Candidato
        </Typography>
      </CardContent>
      <CardActions >
        <Button sx={{ width: '100%'}} variant='outlined'>Votar</Button>
      </CardActions>
    </Card>))
    }
    </Grid>
  );
}
