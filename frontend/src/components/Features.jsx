import React from 'react'

const Features = () => {
  return (
    <section className="bg-white w-150 py-5 feat1">
      <div className="container-fluid px-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="showcase-main rounded-4 overflow-hidden ">
              <div className="showcase-header text-center mx-auto">
                <h2 className="showcase-main-title display-3 fw-bold">
                  Get the best selling foods now or ever
                </h2>
                <div className="showcase-badge badge rounded-pill border mt-3 px-3 py-2">
                  Big Sale Products
                </div>
              </div>
              <div className="mt-n6 ">
                <div className="row g-4 align-items-center ">
                  <div className="col-4 ">
                    <img 
                      src="https://cdn.petdirect.co.nz/cache/640wp/21/9e/18478782808136507a417fc5dec4.png"
                      alt="product" 
                      className="img-fluid mt-8 aspect-ratio-14 catEating" 
                    />
                  </div>
                  <div className="col-4 d-flex justify-content-center">
                    <button className="showcase-shop-button btn text-white fw-medium rounded-pill shadow w-100 ">
                      Shop Now
                    </button>
                  </div>
                  <div className="col-4">
                    <img src="https://anaheimfeed.com/cdn/shop/products/front_c9ae884f-dddd-40ad-9f30-ac1b64222ab6.webp?v=1645822092" 
                    alt="product" className="img-fluid  catEating2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="promo-card-green h-51 p-4">
              <div className="mb-4">
                <button className="promo-button btn text-white fw-semibold rounded-pill mb-3 shopCenter">
                  SHOP NOW
                </button>
                <div className="promo-text">
                  <h5 className="promo-title2 fw-bold text-uppercase text-center">
                    Sale off up to 50%
                  </h5>
                  <p className="promo-subtitle mt-2 text-center">
                    Available on store
                  </p>
                </div>
              </div>
              <img src="https://westerlyagway.com/cdn/shop/files/KnK_Dry_PDP_Original.png?v=1716232824"
               alt="promo" className="img-fluid mt-5 ms-2  catb1" />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="promo-card-blue h-120 p-4">
              <div className="mb-4">
                <button className="promo-button btn text-white fw-semibold rounded-pill mb-3 shopCenter2">
                  SHOP NOW
                </button>
                <div className="promo-text">
                  <h3 className="promo-title fw-bold text-uppercase text-center">
                    Sale off up to 50%
                  </h3>
                  <p className="promo-subtitle mt-2 text-center">
                    Available on store
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mt-4 ms-2">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/9930b87df555fc50535bea4c226c737c266c747f?placeholderIfAbsent=true" alt="promo" 
                  className="img-fluid position-relative  catb2" 
                   
                />
                {/* <div className="promo-decorative-circle rounded-circle catb3"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
