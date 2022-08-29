import { Typography } from "@mui/material"
import { ElectionsGraphsResults } from "../components/ElectionsGraphsResults"

import { ElectionsLayout } from "../layout/electionsLayout"

export const ElectionGraphs = () => {
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Presidente</Typography>
      <ElectionsGraphsResults index={1} lastIndexId={4} />
    </ElectionsLayout>
  )
}
