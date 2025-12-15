import React from 'react'
import { Col, Row, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-white hero" >
      <div className="container-fluid px-3 pb-2">
        <div className="hero-container rounded-4 p-5">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="position-relative catD">
                {/* <img 
                  src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/04f6940297a19f15911a9770fb1a8370f9322b6a?placeholderIfAbsent=true" 
                  alt="pet care" className="img-fluid  aspect-ratio-091 cat34" style={{ width: '51px' }} 
                />  */}
                {/* hero-circular-container  */}
                <div className=" rounded-circle  overflow-hidden ">                  
                  <img   src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/3465d1b67c3b0cfce2bad93f52f32d5771036368?placeholderIfAbsent=true" alt="pet" 
                    className="img-fluid imgCat"                    
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="mt-4">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="position-relative">
                      <h1 className="hero-main-heading display-1 fw-bold">
                        Ensure the well-being{" "}
                        <span className="hero-italic-text">of your pets.</span>
                      </h1>
                      <p className="hero-sub-heading mt-4">
                        Find the best food for your pet, and  everything 
                         <br /> 
                         you need to keep your pet happy and healthy
                      </p>

                      <div className="hero-decorative-circle rounded-circle position-absolute"></div>

                      <div className="d-flex align-items-start gap-3 mt-5">
                        <button className="hero-action-button btn text-white fw-bold text-uppercase rounded-pill shadow">
                          All Collection
                        </button>
                        <button className="hero-icon-button btn btn-outline-danger rounded-circle d-flex align-items-center justify-content-center">
                          <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/e8a5c316e43e7d7e7fd5846ff29e940e060d6fca?placeholderIfAbsent=true" alt="arrow" width="24" height="24" />
                        </button>
                      </div>

                      <div className="d-flex gap-3 mt-5">
                        <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/26a61c84f34344b84fbbbecb721f4950cae49910?placeholderIfAbsent=true" alt="pet 1" width="100" height="100" className="rounded-circle" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/0610a573e75e45be05802944884dfb6b61694c7e?placeholderIfAbsent=true" alt="pet 2" width="100" height="100" className="rounded-circle" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/1ba9da8709c9cbbfc18d5b4b40360bfdd5c03f61?placeholderIfAbsent=true" alt="pet 3" width="100" height="100" className="rounded-circle" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="mt-5">
                      <div className="d-flex justify-content-center gap-3 mb-3">
                        <div className="hero-large-circle rounded-circle"></div>
                        <div className="hero-small-circle rounded-circle align-self-end"></div>
                      </div>
                      <div className="hero-pet-container border rounded-pill overflow-hidden mt-3">
                        <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/05954280435a897cfb5886e986c072ce53152669?placeholderIfAbsent=true" alt="pet illustration" className="img-fluid aspect-ratio-073" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


}

export default Hero
