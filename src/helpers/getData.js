

const baseURL = `https://res.cloudinary.com/dheyjds01/image/upload/v1660511296/Candidatos/`

export const getData = () =>{
  const imageUrls = []
  for(let index = 1; index<=4 ; index++){
    imageUrls.push(`${baseURL}${index}.webp`)
  }

  return imageUrls
}