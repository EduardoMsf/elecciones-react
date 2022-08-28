
import { ImageList, ImageListItem, Button, Box, Grid, Typography } from "@mui/material";
import { getData } from "../../helpers";

export const ImageElections = ({ title='', image=''}) => {
  const withOutPhoto = 'https://res.cloudinary.com/dheyjds01/image/upload/v1661725362/Candidatos/sin-perfil.jpg'
  return (
    <ImageList sx={{ width: '80%', height: 400 }} cols={2} rowHeight={220}>
        <Grid>
          <ImageListItem sx={{width:'90%'}}>
            <img
              src={image.length >= 0 ? `${image}?w=164&h=164&fit=crop&auto=format` : `${withOutPhoto}?w=164&h=164&fit=crop&auto=format` }
              srcSet={image.length >= 0 ? `${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` : `${withOutPhoto}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='Imagen del candidato'
              loading="lazy"            
            />
          </ImageListItem>
          <Typography >{title}</Typography>
        </Grid>
    </ImageList>
  );
}

