 const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Simple header</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
    )}

    export default Navbar;