import { useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardContent, Grid, Typography } from '@mui/material';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { getData } from '../../helpers';


export const CardElections = (props) => {

  const [checked, setChecked] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [userId, setUserId] = useState(-1)
  const [vote, setVote] = useState(false)
  const { indexId, lastIndexId, columns, title } = props
  const images = getData(indexId, lastIndexId)
  const localStorageItem = localStorage.getItem(title)
  const exists = JSON.parse(localStorageItem) != null

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
    localStorage.setItem(title, JSON.stringify(imageUrl))
    setChecked(true)
    // setImageUrl('')
    setUserId(-1)
    setVote(true)
    Swal.fire('Tu voto ha sido enviado', `:)`, 'success')
  }

  return (
    <Grid container display='flex' justifyContent='center'>
        { exists ? images.map( (image, index) =>
          (<Grid item xs={12} sm={6} md={4} lg={3} sx={{padding:'16px'}} justifyContent='space-between'>
            <Card cols={columns} sx={ (checked && userId == index) ? { width:'100%', borderRadius: '16px', transform: 'scale(1.1)'} : { width:'100%', borderRadius: '16px'}} key={index}>
            <CardMedia
              sx={(userId != -1 && userId != index ) ? { width: '100%', height: 300, borderRadius: '16px', opacity:'.5' } : { width: '100%', height: 300, borderRadius: '16px' }}
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent sx={{margin:'0', padding:'5px'}}>
              <Typography align='center' gutterBottom variant="h5" component="div">
              {`Candidato ${index+1}`}
              </Typography>
            </CardContent>
            <CardActions >
              <Button sx={{ width: '100%'}} variant='outlined' color='primary' disabled={true} onClick={() => handleVoteChanged(image, index)}>Votar</Button>
            </CardActions>
          </Card>
          </Grid>)) : images.map( (image, index) =>
          (<Grid item xs={12} sm={6} md={4} lg={3} sx={{padding:'16px'}} justifyContent='space-between'>
            <Card cols={columns} sx={ (checked && userId == index) ? { width:'100%', borderRadius: '16px', transform: 'scale(1.1)'} : { width:'100%', borderRadius: '16px'}} key={index}>
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
              <Button sx={{ width: '100%'}} variant='outlined' color='primary' disabled={(checked)} onClick={() => handleVoteChanged(image, index)}>Votar</Button>
            </CardActions>
          </Card>
          </Grid>))
        }
      <Grid display='flex' justifyContent='center' item xs={12} sm={10} md={9} lg={10}>
        <Button sx={{width:'100%', margin:'15px', height:'50px'}} variant="outlined" color="success" disabled={!checked} onClick={handleVoteSubmit}>
          { exists  ? 'Ya has emitido tu voto' : vote ? 'Ya has emitido tu voto' : 'Confirmar voto'}
        </Button>
        { vote ? '' : <Button sx={exists ? {display:'none'} : {width:'100%', margin:'15px', height:'50px'} } variant="outlined" color="error" disabled={!checked} onClick={handleVoteReset}>
          Votar de nuevo
        </Button>}
      </Grid>
    </Grid>
  );
}
