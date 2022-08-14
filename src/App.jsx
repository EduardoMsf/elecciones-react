import logo from './logo.svg'
import './App.css'
import { getData } from './helpers'

function App() {

  const data = getData()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {data.map( (url, index) => (
          <div key={index}> 
            <img src={url} />
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
