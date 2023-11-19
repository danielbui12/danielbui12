import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { BASE_FILE_URL } from '../utils/constant';
import { useParams } from 'react-router-dom';

const BLOG_SESSION_STORAGE_KEY = 'BLOG_SESSION_STORAGE_KEY'
export const BlogContext = createContext({
  blogs: JSON.parse(window.sessionStorage.getItem(BLOG_SESSION_STORAGE_KEY) || "[]"),
  setBlogs: () => { }
});

// eslint-disable-next-line react/prop-types
export default function BlogContextProvider({ children }) {
  const blogContext = useContext(BlogContext)
  const [blogs, setBlogs] = useState(blogContext.blogs)
  const { tag } = useParams()

  const setGlobalBlogs = useCallback((newBlogs) => {
    window.sessionStorage.setItem(BLOG_SESSION_STORAGE_KEY, JSON.stringify(newBlogs))
    setBlogs(newBlogs)
  }, [])

  useEffect(() => {
    if (blogs.length === 0) {
      fetch(BASE_FILE_URL + 'main.json')
        .then(response => response.text())
        .then(response => {
          let _posts = JSON.parse(response)
          if (tag) {
            _posts = _posts.filter(_post => _post.tag.includes(tag))
          }
          setGlobalBlogs(_posts)
        })
        .catch(err => console.log(err))
    }
  }, [tag, setGlobalBlogs, blogs]);

  return (
    <BlogContext.Provider
      value={{
        blogs: blogs,
        setBlogs: setGlobalBlogs
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}