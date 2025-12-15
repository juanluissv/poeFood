import React from 'react'

const Categories = () => {
  return (
    <div>
        <section className="collections py-5">
          <div className="container">
            <div className="section-header d-flex align-items-center mb-5">
              <h2 className="section-title">
                Explore <span className="fw-medium">each unique collection</span>
              </h2>
              <div className="yellow-indicator ms-2"></div>
            </div>

            <div className="row g-3">
              {[
                { title: 'Light', image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/d4d9e4cacfd141063c32f0cddf96e96c019221c5?placeholderIfAbsent=true', icon: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/45b54427b7c65198e12d6f1b806d4f4b328cb10a?placeholderIfAbsent=true' },
                { title: 'Sofa', image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/a21d540e2ec3b9bcd1ebe457eca4b84d9264010d?placeholderIfAbsent=true', icon: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/0bc90f33b9b1b0cb6249793df5d77671c1696e39?placeholderIfAbsent=true' },
                { title: 'Kitchen', image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/8d6ef0a389402ee8bc187f744d160128d852d275?placeholderIfAbsent=true', icon: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/d8ab1f43f57b40fd5c55bae95d515b2bad5cba38?placeholderIfAbsent=true' },
                { title: 'Storage', image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7d37dd4c4756e0e2d13e604989a8cfcb322eed33?placeholderIfAbsent=true', icon: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/45b54427b7c65198e12d6f1b806d4f4b328cb10a?placeholderIfAbsent=true' },
                { title: 'Bed', image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/bfaa1a1e851ee4017e2e726ca45e29313632432a?placeholderIfAbsent=true', icon: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/fee2f3a2b62341e9f68a66331f8409fb54c3866a?placeholderIfAbsent=true' },
                { title: 'Bath', image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/12731cd2cf0bbc40c285090cf206f708303817e1?placeholderIfAbsent=true', icon: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/dc241a8f16ea9aac9727adb7f8ccfb6b5d89da4a?placeholderIfAbsent=true' }
              ].map((item, index) => (
                <div key={index} className="col-md-4 col-lg-2">
                  <div className="collection-card">
                    <div className="card-image">
                      <img src={item.image} alt={item.title} className="w-100" />
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <span className="card-title">{item.title}</span>
                      <img src={item.icon} alt="" width="20" height="20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Categories
