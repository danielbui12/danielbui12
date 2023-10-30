import Footer from '../components/Footer'
import "../assets/style/blog.css"
import Posts from '../components/Posts'
import BlogNav from '../components/BlogNav'
import BlogContextProvider from '../components/BlogContext'

function Blogs() {
  return (
    <BlogContextProvider>
      <div className='container'>
        <BlogNav />
        <Posts />
      </div>
      <Footer />
    </BlogContextProvider>
  )
}

export default Blogs