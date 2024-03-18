import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
