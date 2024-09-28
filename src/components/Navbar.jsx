import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-custom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand custom-font" href="#">
      <img src="newlogo.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top"/>
      QuickServ
    </a>
  </div>
</nav>
    </div>
  )
}

export default Navbar