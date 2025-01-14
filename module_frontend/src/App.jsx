import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import UploadGame from './pages/UploadGame'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Dashboard from './admin/Dashboard'
import Signup from './pages/Signup'
import ProductTable from './data/ProductTable'

function App() {
 return(
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/upload-game' element={<UploadGame />} />
      <Route path='/faq' element={<FAQ />}></Route>
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      
      <Route path='/admin/dashboard' element={<Dashboard />} />
    </Routes>
  </Router>
  </>
 )
}

export default App
