
import { ImageList, ImageListItem, Button, Box, Grid } from "@mui/material";
import { getData } from "../../helpers";

export const ImageElections = () => {

  const images = getData()
  return (
    <ImageList sx={{ width: '100%', height: 400 }} cols={4} rowHeight={260}>
      {images?.map((image, index) => (
        <Grid key={index} >
          <ImageListItem sx={{width:'90%'}}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='Imagen de la nota'
              loading="lazy"
              
            />
          </ImageListItem>
          <Button sx={{mt:1, display:'block', width:'90%'}} variant='outlined'>Votar</Button>
        </Grid>
      ))}
    </ImageList>
  );
}

