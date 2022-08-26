import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionSenators = () => {
  return (
    <ElectionsLayout>
      <Typography variant='h6'>Candidatos a S(C?)enaduria del Mundo</Typography>
      <CardElections indexId={5} lastIndexId={12} columns={2} />
    </ElectionsLayout>
  )
}