import { List, ListItem, Typography } from "@mui/material"

import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionResults = () => {
  
  const localStorageItems = { ...localStorage }
  const {DragQueen} = localStorageItems
  console.log(DragQueen)
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Mis votos</Typography>
      <List>
        <ListItem>
          Prueba de resultados
        </ListItem>
      </List>
    </ElectionsLayout>
  )
}
