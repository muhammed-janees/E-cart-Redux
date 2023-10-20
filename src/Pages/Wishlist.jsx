import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { deleteFromWishlist } from '../redux/wishlistSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const addToCartFromWishlist =(product)=>{
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }
  // console.log(wishlistArray);
  return (
    <div style={{ marginTop: '100px' }}>
      <Row className='mb-5 ms-5'>
        {
          wishlistArray.length>0? wishlistArray?.map((product, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem', height: '30rem' }}>
                <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 50)}...</p>
                    <p className='fw-bolder fs-5'>${product?.price}</p>
                  </Card.Text>
                  <dic className='d-flex justify-content-between'>
                    <Button onClick={()=>dispatch(deleteFromWishlist(product.id))} className='btn btn-light' variant="primary"><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
                    <Button onClick={()=>addToCartFromWishlist(product)} className='btn btn-light' variant="primary"><i className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
                  </dic>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='fw-bolder text-danger'>Wishlist is empty</p>
        } 
      </Row>
    </div>
  )
}

export default Wishlist