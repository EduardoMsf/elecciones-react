
import { ImageList, ImageListItem, Typography } from "@mui/material";

export const ImageElections = ({ title='', image}) => {
  const withOutPhoto = 'https://res.cloudinary.com/dheyjds01/image/upload/v1660281179/journal-mui/frfuxblsuykaazwsn1ff.jpg'

  return (
    <ImageList display='flex' flexDirection='column' sx={{ width: 500, height: 400 }} cols={2} rowHeight={220}>

          <Typography >{title}</Typography>
          <ImageListItem sx={{width:'100%'}}>
            <img
              src={image.length == 0 ? `${withOutPhoto}?w=164&h=164&fit=crop&auto=format` : `${image}?w=164&h=164&fit=crop&auto=format` }
              srcSet={image.length == 0 ? `${withOutPhoto}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` : `${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='Imagen del candidato'
              loading="lazy"
            />
          </ImageListItem>

    </ImageList>
  );
}

