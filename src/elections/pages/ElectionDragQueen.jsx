import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/ElectionsLayout"

export const ElectionDragQueen = () => {
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Candidatxs a la más draga</Typography>
      <CardElections indexId={16} lastIndexId={20} columns={5} title='DragQueen' />
    </ElectionsLayout>
  )
}