
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getData } from '../../helpers';



export const CardElections = ({image}) => {

  return (
    <Card sx={{ maxWidth: 400 }} cols={4}>
      <CardMedia
        sx={{ width: '100%', height: 300 }}
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardActions >
        <Button sx={{ width: '100%'}} variant='outlined'>Votar</Button>
      </CardActions>
    </Card>
  );
}
