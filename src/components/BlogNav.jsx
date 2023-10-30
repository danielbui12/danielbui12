import { Link } from "react-router-dom"

function BlogNav() {
  const highlightNavStyle = (path) => window.location.href.includes(path) ? 'text-danger' : 'text-light'

  return (
    <nav
      style={{ boxShadow: 'unset' }}
      className="navbar navbar-expand-lg navbar-dark bg-dark flex-column justify-content-between"
      data-spy="affix"
      data-offset-top={100}
    >
      <div className='mt-5 container'>
        <div style={{ flexGrow: 100 }}>
          <h2>
            Latest <span className="text-danger">News</span>
          </h2>
        </div>

        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#blogNavbarSupportedContent"
          aria-controls="blogNavbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse mt-sm-20 navbar-collapse"
          id="blogNavbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link mr-3 h6 ${highlightNavStyle('resume')}`}
                href="https://danielbui12.github.io/danielbui12"
                target="_self"
              >Resume</a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 h6 ${highlightNavStyle('blog')}`}
                to="/blog"
              >Blog</Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 h6 ${highlightNavStyle('tag')}`}
                to="/tag"
              >Tag</Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="line mt-4 mb-5 w-100"></span>
    </nav>
  )
}

export default BlogNav