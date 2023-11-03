import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import BlogNav from "../components/BlogNav"
import Tag from "../components/Tag"
import { BASE_FILE_URL, BASE_WEBSITE_URL } from "../utils/constant"
import DocumentMeta from "react-document-meta"

function Tags() {
  const [tags, setTags] = useState([])

  const meta = {
    title: 'Tag | Daniel',
    description: 'Blog hashtags. Easier to find your what you want 99%.',
    canonical: `${BASE_WEBSITE_URL}tag`,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: tags.join(',')
      }
    }
  };

  useEffect(() => {
    fetch(BASE_FILE_URL + 'tag.json')
      .then(response => response.text())
      .then(response => setTags(JSON.parse(response)))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="container blog-container">
        <BlogNav />
        <div className="container d-flex flex-wrap gap-4">
          <DocumentMeta {...meta}>
          <Tag values={tags} />
          </DocumentMeta>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tags