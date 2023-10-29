import { Link } from "react-router-dom"

function BlogNav() {
  const highlightNavStyle = (path) => window.location.href.includes(path) ? 'text-danger' : 'text-light'

  return (
    <>
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h2>
          Latest <span className="text-danger">News</span>
        </h2>

        <div className='d-flex'>
          <Link
            className={`mr-3 h5 ${highlightNavStyle('resume')}`}
            to="/"
            onClick={(event) => {
              event.preventDefault()
              window.location.href = import.meta.env.BASE_URL
            }}
          >Resume</Link>
          <Link
            className={`mr-3 h5 ${highlightNavStyle('blog')}`}
            to="/blog"
          >Blog</Link>
          <Link
            className={`mr-3 h5 ${highlightNavStyle('tag')}`}
            to="/tag"
          >Tag</Link>
        </div>
      </div>
      <span className="line mt-4 mb-5 w-100"></span>
    </>
  )
}

export default BlogNav