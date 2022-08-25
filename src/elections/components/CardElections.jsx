import { useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getData } from '../../helpers';
import { CardContent, Grid, Typography } from '@mui/material';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const CardElections = () => {

  const [checked, setChecked] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [userId, setUserId] = useState(-1)
  const [vote, setVote] = useState(false)
  const images = getData()
  const handleVoteChanged = (image, index) =>{
    setChecked(!checked)
    setImageUrl(image)
    setUserId(index)
  }
  const handleVoteReset = () =>{
    setChecked(false)
    setImageUrl('')
    setUserId(-1)
  }
  const handleVoteSubmit = () =>{
    Swal.fire('Tu voto ha sido enviado', `${imageUrl}`, 'success')
    setChecked(true)
    setImageUrl('')
    setUserId(-1)
    setVote(true)
  }

  console.log('image',!!imageUrl)
  console.log(checked)
  console.log(userId)

  
  return (
    <Grid display='flex' flexDirection='column'>
      <Grid display='flex'>  
        { images.map( (image, index) =>
          (<Card cols={4} sx={ (checked && userId == index) ? { width:'100%', margin:'16px', borderRadius: '16px', transform: 'scale(1.1)'} : { width:'100%', margin:'16px', borderRadius: '16px'}} key={index}>
            <CardMedia
              sx={(userId != -1 && userId != index ) ? { width: '100%', height: 300, borderRadius: '16px', opacity:'.5' } : { width: '100%', height: 300, borderRadius: '16px' }}
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
              <Button sx={{ width: '100%'}} variant='outlined' color='primary' disabled={checked} onClick={() => handleVoteChanged(image, index)}>Votar</Button>
            </CardActions>
          </Card>))
        }
      </Grid>
      <Grid display='flex' justifyContent='center'>
        <Button sx={{width:'20%', margin:'15px'}} variant="outlined" color="success" disabled={!checked} onClick={handleVoteSubmit}>
          {vote ? 'Ya has emitido tu voto' : 'Confirmar voto'}
        </Button>
        { vote ? '' : <Button sx={{width:'20%', margin:'15px'}} variant="outlined" color="error" disabled={!checked} onClick={handleVoteReset}>
          Votar de nuevo
        </Button>}
      </Grid>
    </Grid>
  );
}
