import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <nav style={{zIndex:'1'}} className="navbar navbar-expand-lg navbar-light bg-primary position-fixed w-100">
      <div className="container px-4 px-lg-5">
        <Link to={'/'} className="navbar-brand text-light fw-bolder"><i class="fa-solid fa-cart-shopping me-2"></i>E-Cart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex ms-auto">
            <Link to={'/wishlist'} className="btn btn-outline-light d-flex align-items-center" type="submit">
              <i className="fa-solid fa-heart text-danger me-1"></i>
              Wishlist
              <span className="badge bg-light text-dark ms-1 rounded-pill">{wishlist.length}</span>
            </Link>
            <Link to={'/cart'} className="btn btn-outline-light ms-4 d-flex align-items-center" type="submit">
            <i class="fa-solid fa-cart-plus me-1"></i>
              Cart
              <span className="badge bg-light text-dark ms-1 rounded-pill">{cart.length}</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header