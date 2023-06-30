import React from 'react';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a href="#" className='nav-link'>
          Home
          </a>
            </li>

            <a href="#" className='nav-link'>
          About
          </a>

          </ul>

    <div className='d-flex m-2'>
    <button type="button" className="btn btn-primary btn-circle btn-xl" onClick = {() => {props.toggle('primary')}}></button>
    <button type="button" className="btn btn-secondary btn-circle btn-xl" onClick = {() => {props.toggle('secondary')}}></button>
    <button type="button" className="btn btn-success btn-circle btn-xl" onClick = {() => {props.toggle('success')}}></button>
    <button type="button" className="btn btn-danger btn-circle btn-xl" onClick = {() => {props.toggle('danger')}} ></button>
    <button type="button" className="btn btn-warning btn-circle btn-xl" value="blue" onClick = {() => {props.toggle('warning')}}> </button>
    </div>




          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success mr-2" type="submit">Search</button>

          
          </form>
        </div>
      </div>
    </nav>
  )
}
