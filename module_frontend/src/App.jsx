import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import UploadGame from './pages/UploadGame'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
 return(
  <>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/upload-game' element={<UploadGame />} />
      <Route path='/faq' element={<FAQ />}></Route>
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </Router>
  </>
 )
}

export default App
