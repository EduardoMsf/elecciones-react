import { ElectionsRoutes } from './elections/routes/ElectionsRoutes'
import { AppTheme } from './theme'

export const App = () => {

  return (
    <AppTheme>
      <ElectionsRoutes />
    </AppTheme>
  )
}
