import React from 'react'
import './Header.css'
function Header() {
  return (
    <>
<div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="/Login" onClick="active">Login</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
      
    </>
  )
}

export default Header
