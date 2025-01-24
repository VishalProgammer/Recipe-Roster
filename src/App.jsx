import { useState } from 'react'
import './App.css'
import Home from './frontend/pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='header'>Recipe Roaster</h1>
    <Home/>
    </>
  )
}

export default App
