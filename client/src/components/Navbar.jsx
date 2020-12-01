import React from 'react';
import getTotal from './getTotal.jsx';

const Navbar = ({ bg, logo, bag, handleChange, handleSearchSubmit }) => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark img-fluid" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center right', width: '100%' }}>

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

        <div className="d-flex">
          {/* SEARCH */}
          <form className="form-inline">
            <div className="input-group">
              <input type="search" className="form-control" placeholder="Search..." onChange={handleChange} />
              <div className="input-group-append d-inline">
                <button className="btn btn-warning" id="search-btn" type="button"><i class="fas fa-search" onClick={() => handleSearchSubmit()} ></i></button>
              </div>
            </div>
          </form>

          {/* CART */}
          <button className="btn btn-warning ml-2" type="button" data-toggle="modal" data-target="#cartModal" onClick={() => console.log('clīkk')}><i class="fas fa-shopping-cart"></i></button>

          <div className="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="cartModalLabel">Shopping Bag</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                {bag.length > 0 ?
                  bag.map(item => {
                    return (
                      <div className="row">
                        <div className="col-5 pl-5">
                          <div className="row"><strong>{item.name}</strong></div>
                          <div className="row"><small>Size {item.size}</small></div>
                        </div>
                        <div className="col-5"><small>{item.style}</small></div>
                        <div className="col-2">${item.price}</div>
                      </div>
                    )
                  }) :
                  <div className="row ml-1">Your bag is currently empty.</div>
                }
                </div>
                <div className="modal-footer">
                  <div className="container-fluid">
                  {bag.length &&
                    <div className="row">
                      <div className="col-6"><strong>TOTAL:</strong></div>
                      <div className="col-3 ml-auto"><strong>${getTotal(bag)}</strong></div>
                    </div>
                  }
                  </div>
                  <button className="btn btn-warning" type="button" data-dismiss="modal">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </nav>

)

export default Navbar;