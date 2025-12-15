import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineHighQuality } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";


const Services = () => {

  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/9dd9b27788712e4fb2333e7b05c61a33b62c9f90?placeholderIfAbsent=true",
      title: "Same Day Local Delivery min $25, 2"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/632fcbe7722164225700a2f2e403c09a6bcebfd7?placeholderIfAbsent=true",
      title: "Free Nationwide Shipping orders of $50+, 3"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/ce0f0271f08194168d7292a0de0a0c005b3d92a7?placeholderIfAbsent=true",
      title: "Local Store Pickup"
    }
  ];



  return (
    <section className="service-features-container rounded-4 d-flex flex-column justify-content-center overflow-hidden mx-auto">
      <div className="d-flex align-items-start gap-5 flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="service-feature-item d-flex align-items-center gap-3">
            <div className="flex-shrink-0">
              <img src={feature.icon} alt="feature icon" width="56" height="56" />
            </div>
            <span className="flex-grow-1">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
