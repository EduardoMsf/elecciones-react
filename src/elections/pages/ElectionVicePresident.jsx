import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionVicePresident = () => {
  return (
    <ElectionsLayout>
      <Typography variant='h6'>Candidatos a la Vice Presidencia del Mundo</Typography>
      <CardElections indexId={13} lastIndexId={15} columns={3} />
    </ElectionsLayout>
  )
}