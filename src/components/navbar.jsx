import React, { Component, useRef }  from 'react';

const NavBar = ({totalCount, onAdd}) => {
   
  return (
    <nav class="navbar navbar-light bg-light">
       <a class="navbar-brand" href="#">Navbar {''}
	      <span className="badge badge-pill badge-secondary">
	         {totalCount}
	      </span> 
       </a> 
    </nav>
  )
}

export default NavBar;
