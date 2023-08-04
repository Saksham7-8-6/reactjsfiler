import React from 'react'
import PropTypes from 'prop-types'
// import { NavLink } from "react-router-dom";


export default function  Navbar(props) {
// function color(colors){
//     document.body.style.backgroundColor=colors;
// }


  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#" >{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-NavLink mx-2"  aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-NavLink" to="/about">{props.Abouttext}</NavLink>
            </li> */}
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-3" type="search" placeholder="Search Here" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      
      {/* <div className="dropdown mx-4">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Colored Background
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={props.red} href="#">Red</a></li>
          <li><a className="dropdown-item" onClick={props.yellow} href="#">Yellow</a></li>
          <li><a className="dropdown-item" onClick={props.green} href="#">Green</a></li>
        </ul>
      </div> */}
            <div className="form-check form-switch mx-2">
                <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"  aria-checked="false"/>
                <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault" >{props.mode} mode</label>
            </div>
        </div>
    </div>
    </nav>   
  )
}


Navbar.propTypes={
    title: PropTypes.string.isRequired,
    Abouttext:PropTypes.string.isRequired
};

Navbar.defaultProps={
    title:"This is default",
    Abouttext:"This is default"
}
