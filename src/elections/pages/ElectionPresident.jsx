import { Typography } from "@mui/material"
import { CardElections } from "../components/CardElections"
import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionPresident = () => {
  return (
    <ElectionsLayout>
      <Typography variant='h6'>Candidatos a Presidencia del Mundo</Typography>
      <CardElections />
    </ElectionsLayout>
  )
}
