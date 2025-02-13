import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteBody } from './frontend/components/SiteBody'
import { Login } from './frontend/components/Login'
import { Register } from './frontend/components/Register'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <h1 className='header'>Racipe Roaster</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/site" element={<SiteBody />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
