import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/global.css';
import {Login} from './Pages/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
