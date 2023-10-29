import "../assets/style/blog.css"
import BlogNav from "../components/BlogNav"
import Footer from "../components/Footer"
import Post from "../components/Post"

function Blog() {
  return (
    <>
      <div className="container">
        <BlogNav />
        <Post />
      </div>
      <Footer />
    </>
  )
}

export default Blog