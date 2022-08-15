import { getData } from './helpers'
import { AppTheme } from './theme'

export const App = () => {

  const data = getData()


  return (
    <AppTheme>
      <div>
        <h1>Hola democrático mundo, elecciones</h1>
      </div>
    </AppTheme>
  )
}
