import { useEffect, useLayoutEffect, useState } from "react"
import Footer from "../components/Footer"
import BlogNav from "../components/BlogNav"
import Tag from "../components/Tag"
import { BASE_FILE_URL } from "../utils/constant"

function Tags() {
  const [tags, setTags] = useState([])

  useLayoutEffect(() => {
    document.title = 'Tag | Daniel'
  }, [])

  useEffect(() => {
    fetch(BASE_FILE_URL + 'tag.json')
      .then(response => response.text())
      .then(response => setTags(JSON.parse(response)))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="container">
        <BlogNav />
        <div className="container d-flex flex-wrap gap-4">
          {
            tags.map((_tag) => {
              return (
                <div key={_tag}>
                  <Tag name={_tag} />
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tags