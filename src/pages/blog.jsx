import "../assets/style/blog.css"
import BlogContextProvider from "../components/BlogContext"
import BlogNav from "../components/BlogNav"
import Footer from "../components/Footer"
import Post from "../components/Post"

function Blog() {
  return (
    <BlogContextProvider>
      <div className="container">
        <BlogNav />
        <Post />
      </div>
      <Footer />
    </BlogContextProvider>
  )
}

export default Blog