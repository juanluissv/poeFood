import React from 'react'

const Oimage = () => {
  return (
    <section className="bg-white  py-5 Oimage">
    <div className="container-fluid px-5">
      <div className="promo-section-container rounded-4 overflow-hidden">
        <div className="row g-4 mb-4">
          <div className="col-lg-2 d-flex align-items-center">
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/a03bbd9525e81d73f207f57e0bb299e8b42dd70f?placeholderIfAbsent=true" alt="pet" className="img-fluid aspect-ratio-1" style={{ width: '145px' }} />
          </div>

          <div className="col-lg-8">
            <div className="promo-section-text text-center">
              <div>
                {/* <div className="promo-section-badge badge rounded-pill border d-inline-block mb-4">
                  Everything for your pets
                </div> */}
                <h2 className="promo-section-title display-4 fw-bold">
                  Accessories and food for your pets.
                </h2>
              </div>

              <div className="promo-section-actions d-flex justify-content-center gap-3 mt-5">
                <button className="promo-action-button-1 btn text-white fw-bold text-uppercase rounded-pill flex-grow-1">
                  Get more offer
                </button>
                <button className="promo-action-button-2 btn text-white fw-bold text-uppercase rounded-pill flex-grow-1">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="mt-5">
              <div className="ps-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/652b5a13b3bd307c189e9ebaeff75f6ac0369ae0?placeholderIfAbsent=true" alt="decoration" className="img-fluid aspect-ratio-211" style={{ width: '154px' }} />
                <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/b6f0233b46f289ee40377b9ed1436814b9cf440a?placeholderIfAbsent=true" alt="decoration" className="img-fluid mt-2 aspect-ratio-2" style={{ width: '28px' }} />
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/11b6d0bacac6e76c8afd78245f7a758451f8ddd5?placeholderIfAbsent=true" alt="decoration" className="img-fluid mt-2 aspect-ratio-2" style={{ width: '14px' }} />
            </div>
          </div>
        </div>

        <div className="big-sale-section d-flex align-items-center justify-content-center gap-5 mt-2 flex-wrap mx-auto">
          {/* <div className="big-sale-circle rounded-circle d-flex align-items-center justify-content-center align-self-start">
            <div className="big-sale-text">
              BIG
              <br />
              SALE
            </div>
          </div> */}

          {/* <div className="sale-promo-container position-relative rounded-circle d-flex flex-column align-items-center justify-content-center mt-2">
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/8eb58436a81bd3240fe1b58577c2c396fd52168c?placeholderIfAbsent=true" alt="sale background" className="sale-promo-image position-absolute top-0 start-0 w-100 h-100" />
            <div className="position-relative">UP TO 50% OFF</div>
          </div> */}

          <img 
            src="https://kiwipetz.co.nz/cdn/shop/collections/cat_toys.png?v=1484100086" 
            alt="promo image" className="img-fluid  align-self-end mt-5 promImg "
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Oimage
