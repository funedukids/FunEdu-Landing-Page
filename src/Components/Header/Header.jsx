import { Link } from 'react-router-dom';
import funeduofflogo from '../../assets/funeduofflogo.svg';
import { useState } from 'react';

function Header() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleSignInClick = () => {
//     setIsPopupVisible(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupVisible(false);
//   };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={funeduofflogo} alt="FunEdu Logo" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto">
            <ul className="d-flex navbar-nav justify-content-between">
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/"><h6 className="text-primary-custom">Home</h6></Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="#"><h6 className="text-primary-custom">Product</h6></Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/#"><h6 className="text-primary-custom">Waitlist</h6></Link>
              </li>
              {/* <li className="nav-item mx-4">
                <Link className="nav-link" to="faq"><h6 className="text-primary-custom">FAQs</h6></Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="d-flex gap-2">
            <button className="btn btn-outline-primary px-3" onClick={handleSignInClick}>Sign-in</button>
            <button className="btn btn-primary px-4">Book a Demo</button>
          </div> */}
        </div>
      </div>

      {/* {isPopupVisible && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" style={{ zIndex: 1050 }}>
          <div
            className="bg-primary-custom p-5 rounded-4 shadow-lg text-center position-relative"
            style={{ width: '500px' }}
          >
            <button
              className="position-absolute fs-2 fw-bold"
              style={{ top: '0', right: '5px', color: 'white', backgroundColor: 'transparent', border: 'none' }}
              onClick={handleClosePopup}
            >X</button>
            <div className="btn-group-vertical w-100">
              <a href="https://teleclinix-react.vercel.app" className="btn btn-outline-primary bg-white rounded-4 w-100 mb-3 py-3 fs-2 fw-semibold">As a Patient</a>
              <a href="https://teleclinix-react.vercel.app/authentication/register-doctor" className="btn btn-outline-primary bg-white rounded-4 w-100 py-3 fs-2 fw-semibold">As a Medical Personnel</a>
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
}

export default Header;

