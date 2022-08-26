

const baseURL = `https://res.cloudinary.com/dheyjds01/image/upload/v1660511296/Candidatos/`

export const getData = (indexId = 1, lastIndexId = 4) =>{
  const imageUrls = []
  for(indexId; indexId<=lastIndexId ; indexId++){
    imageUrls.push(`${baseURL}${indexId}.webp`)
  }

  return imageUrls
}