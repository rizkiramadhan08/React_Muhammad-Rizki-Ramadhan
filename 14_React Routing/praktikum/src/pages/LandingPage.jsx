import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk routing
import hero from '../assets/hero.png';

function LandingPage() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">Simple header</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="btn btn-primary mx-2" href="#" role="button">Home</a>
                <a className="nav-link text-primary mx-2" href="#">Pricing</a>
                <a className="nav-link text-primary mx-2" href="#">FAQs</a>
                <a className="nav-link text-primary mx-2" href="#">Features</a>
                <a className="nav-link text-primary mx-2" href="#">About</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid p-5" style={{ backgroundColor: "#37517E", marginTop: "30px" }}>
          <div className="row justify-content-center align-items-center p-md-5">
            <div className="col-md-6 order-md-1 order-2 text-white mt-5 mt-md-0">
              <h1>Better Solutions For Your Business</h1>
              <p>We are a team of talented designers making websites with Bootstrap</p>
              <Link to="/createproduct">
                <button className="btn btn-primary rounded-pill me-4 px-4" type="button">
                  Create Product
                </button>
              </Link>
              <button className="btn btn-primary bg-transparent border-0" type="button">Watch Video</button>
            </div>
            <div className="col-md-6 order-md-2 order-1 mt-5 mt-md-0">
              <img src={hero} className="img-fluid" alt="Landing page illustration" />
            </div>
          </div>
        </div>

        <div className="container-fluid p-md-5 py-4" style={{ backgroundColor: "#F3F5FA" }}>
          <div className="row">
            <div className="col-lg-6 text-center mx-auto">
              <h2>Join Our Newsletter</h2>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <div className="position-relative mt-4">
                <input type="text" className="form-control rounded-pill pe-5" placeholder="Your email" />
                <button className="btn btn-primary rounded-pill position-absolute end-0 top-0 z-index-1" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>ARSHA</h3>
                <p>
                  A108 Adam Street<br />
                  New York, NY 535022<br />
                  United States<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-services">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-social">
                <h4>Our Social Networks</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className="d-flex justify-content-start">
                  <a href="#" className="btn btn-primary rounded-circle me-2" style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-primary rounded-circle me-2" style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary rounded-circle me-2" style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary rounded-circle me-2" style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="btn btn-primary rounded-circle" style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid px-md-5 text-white" style={{ backgroundColor: "#37517E" }}>
            <div className="row px-md-5 px-3">
              <div className="d-md-flex justify-content-between text-center py-3">
                <h6 className="mb-0 fw-normal">© Copyright <span className="fw-bold">Arsha</span>. All Rights Reserved</h6>
                <p className="mb-0">Designed by <span style={{ color: "#47B2E4" }}>BootstrapMade</span></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
