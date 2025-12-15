import React from 'react'
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/ProductApiSlice';
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber }); 

  return (
    <section className="bg-white w-100 py-5 featp1">
      <div className="container-fluid px-5">
        <div className="d-flex align-items-center justify-content-between flex-wrap mb-5 gap-4">
          <div className="product-section-header">
            <h3 className="product-section-title display-4 fw-bold">
              Explore our range of cat food products
            </h3>
            <p className="product-section-subtitle mt-4">
              Explore a Diverse Assortment of High-Quality and Nutritious Cat
              Food Products
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 cursor-pointer showMore">
            <span className="product-show-more-text fw-bold">
              SHOW MORE PRODUCT
            </span>
            <div className="product-show-more-icon rounded-circle d-flex align-items-center justify-content-center">
              <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/969d2d4c1e0532b099e3127de791f224346f3cd0?placeholderIfAbsent=true" alt="arrow" width="30" height="30" />
            </div>
          </div>
        </div>

        <div className="row g-4">
          {data.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 productCard">
              <article className="product-card position-relative">
                <div className="position-relative">
                  {product.sale && (
                    <span className="product-sale-badge badge position-absolute text-white fw-medium">
                      SALE
                    </span>
                  )}
                  <div className="product-image-container rounded-4 d-flex align-items-center justify-content-center p-4">
                  <Link to={`/product/${product._id}`} className='linkImage'>
                    <img src={product.image} alt={product.title} className="img-fluid imgProd"  />
                  </Link>
                  </div>
                </div>

                <div className="mt-3" style={{ width: '276px', maxWidth: '100%' }}>
                <Link to={`/product/${product._id}`} className='links2'>
                  <h3 className="product-title fw-medium links2">
                    <span className='links2'>{product.title}</span>
                  </h3>
                </Link>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="product-price-container position-relative d-flex align-items-start gap-2">
                      <span className="product-current-price">$ {product.price}</span>
                      {product.originalPrice && (
                        <span className="product-original-price text-decoration-line-through position-absolute">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="product-rating d-flex align-items-center gap-1 fw-bold">
                      <span>(</span>
                      <img src={product.ratingIcon} alt="star" width="24" height="24" />
                      <span>{product.rating}</span>
                      <span>)</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
