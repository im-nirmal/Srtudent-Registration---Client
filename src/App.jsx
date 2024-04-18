


import Register from '../Components/Register'
import Details from '../Components/Details'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
