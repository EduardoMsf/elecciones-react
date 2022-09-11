import { Typography } from "@mui/material"
import { ElectionsGraphsResults } from "../components/ElectionsGraphsResults"

import { ElectionsLayout } from "../layout/ElectionsLayout"

export const ElectionGraphs = () => {
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Presidente</Typography>
      <ElectionsGraphsResults/>
    </ElectionsLayout>
  )
}
