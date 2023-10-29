import { useLayoutEffect } from 'react'
import Footer from '../components/Footer'
import "../assets/style/blog.css"
import Posts from '../components/Posts'
import BlogNav from '../components/BlogNav'

function Blogs() {

  useLayoutEffect(() => {
    document.title = 'Blog | Daniel'
  }, [])

  return (
    <>
      <div className="container">
        <BlogNav />
        <Posts />
      </div>
      <Footer />
    </>
  )
}

export default Blogs