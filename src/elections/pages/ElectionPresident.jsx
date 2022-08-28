import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionPresident = () => {
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Candidatos a Presidencia del Mundo</Typography>
      <CardElections indexId={1} lastIndexId={4} columns={4} title='President' />
    </ElectionsLayout>
  )
}
