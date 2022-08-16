import { ElectionsLayout } from './elections/layout/electionsLayout'
import { getData } from './helpers'
import { AppTheme } from './theme'

export const App = () => {

  const data = getData()


  return (
    <AppTheme>
      <ElectionsLayout />
    </AppTheme>
  )
}
