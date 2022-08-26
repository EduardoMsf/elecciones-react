import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionDragQueen = () => {
  return (
    <ElectionsLayout>
      <Typography variant='h6'>Candidatxs a la más draga</Typography>
      <CardElections indexId={16} lastIndexId={20} columns={5} />
    </ElectionsLayout>
  )
}