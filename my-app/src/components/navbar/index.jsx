import React from 'react'

export default function Navbar() {
    return (
        <div className="row nav-custom">
            <div className="col-2">
            <img src="https://www.buythelogo.com/wp-content/uploads/2019/03/Star-one-1-abstract-logo.jpg" alt="" className=" custom-logo img-thumbnail"  />
            </div>
            <div className="col-8 ">
    <div className="custom-align">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly custom-link-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
             <a className="nav-link" href="#">RESOURCES</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="#">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">DONATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">EVENTS</a>
        </li>
        
        
      </ul>
            </div>
            </div>
            <div className="col-2 h-100 btn-div-header">

<button className="btn btn-success btn-lg custom-btn-donate">DONATE US</button>

            </div>
        </div>
    )
}
