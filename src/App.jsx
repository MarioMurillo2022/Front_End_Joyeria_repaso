import React from 'react'
import { LogIn } from './Components/LogIn'
import { SignIn } from './Components/SignIn'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />} > </Route>
          <Route path='/SignIn' element={<SignIn />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
