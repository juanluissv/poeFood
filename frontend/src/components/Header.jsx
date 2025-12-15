import React from 'react';
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try{
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart())
      navigate('/login');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <header className="bg-white w-100">
    <div className="container-fluid px-4 py-3">
      <nav className="d-flex align-items-center justify-content-between flex-wrap gap-3">
        <h1 className="header-logo fw-bold  m-0 px-3 py-2">
          Poe Food
        </h1>

        <div className="header-search-container flex-grow-1 mx-4 rounded-pill px-3 py-2">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center fw-medium">
              <span>All</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/b82c0a98a1cd1acc18035ee88117bf0c48a09bf8?placeholderIfAbsent=true" alt="dropdown" className="ms-2" width="20" height="20" />
            </div>
            <div className="header-search-divider border-start"></div>
            <input
              type="text"
              placeholder="Search for Lighting"
              className="header-search-input border-0 bg-transparent flex-grow-1"
            />
          </div>
        </div>

        <div className="header-user-actions d-flex align-items-center gap-3">
          <button className="header-action-button btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center">
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/4c632af67872244141d278cde1430145cad64b06?placeholderIfAbsent=true" alt="user" width="24" height="24" />
          </button>
          <button className="header-action-button btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center">
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/273384e186b35602765294c964574b9d50b18963?placeholderIfAbsent=true" alt="heart" width="24" height="24" />
          </button>
          <button className="header-action-button btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center position-relative">
            <span className="header-cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill text-white fw-bold d-flex align-items-center justify-content-center">
              4
            </span>
            <img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="heart" width="24" height="24" />
          </button>
        </div>
      </nav>

      <div className="header-navigation d-flex align-items-center justify-content-between mt-3 flex-wrap gap-4">
        <div className="header-main-nav d-flex align-items-center gap-4 flex-wrap">
          <div className="d-flex align-items-center cursor-pointer">
            <span>Products</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/db502fe40dcd5646b8f84899937eef6b17879454?placeholderIfAbsent=true" alt="dropdown" width="16" height="16" className="ms-1" />
          </div>
          <div className="d-flex align-items-center cursor-pointer">
            <span>Sale & Offers</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/db502fe40dcd5646b8f84899937eef6b17879454?placeholderIfAbsent=true" alt="dropdown" width="16" height="16" className="ms-1" />
          </div>
          <div className="d-flex align-items-center cursor-pointer">
            <span>Our Universe</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/db502fe40dcd5646b8f84899937eef6b17879454?placeholderIfAbsent=true" alt="dropdown" width="16" height="16" className="ms-1" />
          </div>
          <div className="d-flex align-items-center cursor-pointer">
            <span>Demos</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/db502fe40dcd5646b8f84899937eef6b17879454?placeholderIfAbsent=true" alt="dropdown" width="16" height="16" className="ms-1" />
          </div>
          <span className="cursor-pointer">Theme Features</span>
        </div>

        <div className="header-secondary-nav d-flex align-items-center gap-4">
          <div className="d-flex gap-4">
            <span className="cursor-pointer">Shipping</span>
            <span className="cursor-pointer">Returns</span>
            <span className="cursor-pointer">FAQs</span>
          </div>
          <div className="header-support-button d-flex align-items-center gap-2 rounded-pill px-2 py-1">
            <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/5bbb50f983a903fe7172acaef21695d80a87fda6?placeholderIfAbsent=true" alt="support" width="24" height="24" className="rounded-circle" />
            <span className="flex-grow-1">Email support</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header