import React from 'react';

const Navbar = ({ bg, logo, handleChange, handleSearchSubmit }) => (

  <nav className="navbar navbar-expand-md navbar-dark bg-dark img-fluid" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center right', width: '100%' }}>

    <div className="container">

      {/* LOGO */}
      <a className="navbar-brand mb-1 pb-2" href="#"><img width="80px" height="36px" src={logo} /></a>

      {/* TOGGLER */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse in navbar-collapse justify-content-between" id="nav-collapse">

        {/* LINKS */}
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a href="" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">Men</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">Women</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">Youth</a>
          </li>
        </ul>

        {/* SEARCH */}
        <form className="form-inline">
          <div className="input-group">
            <input type="search" className="form-control" placeholder="Search..." onChange={handleChange} />
            <div className="input-group-append">
              <button className="btn btn-warning" id="search-btn" type="button" style={{ backgroundColor: '#F0A500' }}><i class="fas fa-search" onClick={() => handleSearchSubmit()} ></i></button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </nav>

)

export default Navbar;