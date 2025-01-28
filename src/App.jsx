import { useState } from 'react'
import './App.css'
import Home from './frontend/pages/home'
import { NavBar } from './frontend/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Explore } from './frontend/pages/explore'
import { AddRecipe } from './frontend/pages/AddNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='header'>Recipe Roaster</h1>
    <NavBar/>

    {/* HOME PAGE */}
    {/* <Home/> */}

    {/* EXPLORE PAGE */}
    <Explore/>

    {/* Add New Recipe */}
    {/* <AddRecipe/> */}

    </>
  )
}

export default App
