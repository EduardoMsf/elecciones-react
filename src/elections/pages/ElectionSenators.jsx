import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/ElectionsLayout"

export const ElectionSenators = () => {
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Candidatos a S(C?)enaduria del Mundo</Typography>
      <CardElections indexId={5} lastIndexId={12} columns={2} title='Senators' />
    </ElectionsLayout>
  )
}