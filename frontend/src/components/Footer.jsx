import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About us", "Shop", "Catalogue", "Contact"]
    },
    {
      title: "Product",
      links: ["Hot Product", "Cat", "Now fresh", "Discount"]
    },
    {
      title: "Contact Us",
      links: ["Support", "Privacy Policy", "Terms & Conditions", "Cookies"]
    }
  ];

  return (
    <footer className="w-100 overflow-hidden foot1">
      <div className="container-fluid px-5 py-5">
        <div className="footer-content mx-auto mt-5">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="mt-2">
                <h3 className="footer-brand-name fw-semibold">
                  Poe Food
                </h3>
                <p className="footer-brand-description mt-3">
                  Share Your Custom Cat Food Preferences with Us Today and Let
                  Us Fulfill Them with Care!
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="footer-links">
                <div className="row g-4">
                  {footerSections.map((section, index) => (
                    <div key={index} className="col-lg-4">
                      <div className="d-flex flex-column gap-3">
                        <h4 className="footer-section-title fw-bold m-0">
                          {section.title}
                        </h4>
                        {section.links.map((link, linkIndex) => (
                          <a key={linkIndex} href="#" className="footer-link text-decoration-none">
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="mt-4 align-self-start">
                  <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/b639072b4610e5a20ca8284c5174c32d17acd2fa?placeholderIfAbsent=true" alt="social media" width="56" height="56" />
                </div> */}
              </div>
            </div>
          </div>

          <hr className="footer-divider my-5" />

          <p className="footer-copyright text-center m-0">
            © poeFood 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer