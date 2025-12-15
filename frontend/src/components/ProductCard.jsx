import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ _id, name, oldPrice, newPrice, price, image }) => {
  return (
    <div className='product23'>
    <article className="d-flex flex-column">
      <div className="product-image mb-4">
      <Link to={`/product/${_id}`}>
        <img 
        src={image} 
        alt={name} 
        className="img-fluid imgproduct" />
      </Link>
      </div>
      <div className="text-center px-4">
      <Link to={`/product/${_id}`} className='productName'>
      <h4 className="fs-6 productName">{name}</h4>
      </Link>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
          <span className="text-secondary productPrice">${price}</span>
          {/* <div className="price-divider"></div>
          <span className="text-primary-blue small">{newPrice}</span> */}
        </div>
        {/* <Link to={`/product/${_id}`}>
        <button className="btn mt-3">Go to Product</button>
        </Link> */}
      </div>
    </article><br />
      
    </div>
  )
}

export default ProductCard
