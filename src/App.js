import React from 'react'
import './App.css';
import Home from './Components/Pages/Home'
import LoginSignup from './Components/Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route index element={<Home />} /> 
        <Route path='/Home' element={< Home />} />
        <Route path='/Login' element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
