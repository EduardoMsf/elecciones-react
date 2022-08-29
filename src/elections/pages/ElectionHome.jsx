import { Typography } from "@mui/material"

import { ElectionsLayout } from "../layout/electionsLayout"

const items = {...localStorage}
//console.log({items})
export const ElectionHome = () => {
  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Home</Typography>
    </ElectionsLayout>
  )
}
