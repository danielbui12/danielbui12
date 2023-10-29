import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
      data-spy="affix"
      data-offset-top={100}
    >
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse mt-sm-20 navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                Resume
              </a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <a href="#home">
              <img src="/assets/imgs/avatar.png" alt="Daniel" className="brand-img" />
              <li className="brand-txt">
                <h5 className="brand-title text-light">Daniel</h5>
                <div className="brand-subtitle">To Infinity And Beyond</div>
              </li>
            </a>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#techstack" className="nav-link">
                Tech Stack
              </a>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav