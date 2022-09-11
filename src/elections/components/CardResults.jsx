import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardResults = (props)  =>{
  
  const { title='', image} = props
  const withOutPhoto = 'https://res.cloudinary.com/dheyjds01/image/upload/v1660281179/journal-mui/frfuxblsuykaazwsn1ff.jpg'
  return (
    <Card sx={{ width:'100%', marginLeft:'0px', marginTop:'32px' }}>
      <CardMedia
        component="img"
        height="240"
        image={image.length == 0 ? withOutPhoto : image}
        alt="imagen candidato"
      />
      <CardContent>
        <Typography align='center' gutterBottom variant="h4" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

