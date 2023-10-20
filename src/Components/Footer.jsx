import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ width: '100%', height: '300px' }}>
      <div className='footer d-flex justify-content-evenly w-100'>
        <div style={{ width: '400px' }} className="website">
          <h4>
          <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
          <i class="fa-solid fa-cart-shopping me-2"></i>{' '}
              E Cart
          </Link>
          </h4>
          <h6>
            Designed and built with all the love in the world by the E-cart team with the help of our contributors.
          </h6>
          <h6>Code licensed MIT, docs CC BY 3.0.</h6>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}> Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'blue' }}> Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'blue' }}> Wishlist</Link>
        </div>

        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'blue' }}> React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'blue' }}> Raect Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{ textDecoration: 'none', color: 'blue' }}> Routing</Link>
        </div>

        <div className="contacts">
          <h4>Contact Us</h4>
          <div className="sub d-flex mt-3">
            <input type="text" className='form-control' placeholder='Enter your Email Id'/>
            <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right fa-beat'></i></button>
          </div>
          <div className="icons f-4 d-flex justify-content-between mt-3">
            <Link to={'https://getbootstrap.com'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-solid fa-envelope'></i> </Link>
            <Link to={'https://getbootstrap.com'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-brands fa-github'></i> </Link>
            <Link to={'https://getbootstrap.com'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-brands fa-linkedin'></i> </Link>
            <Link to={'https://getbootstrap.com'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-brands fa-facebook'></i> </Link>
            <Link to={'https://getbootstrap.com'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-brands fa-instagram'></i> </Link>
            <Link to={'https://getbootstrap.com'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-brands fa-twitter'></i> </Link>
          </div>
        </div>
      </div>


      <p>Copyright © 2023 E-Cart. Built with React.</p>
    </div>
  )
}

export default Footer