import moment from "moment"
import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_WEBSITE_URL } from '../utils/constant'
import GoBackButton from './GoBackButton'
import DocumentMeta from "react-document-meta"
import { BlogContext } from "./BlogContext"

function Posts() {
  const blogContext = useContext(BlogContext)
  const { tag } = useParams()

  const meta = {
    title: tag ? `Blog | ${tag}` : 'Blog | Daniel',
    description: `Blogs about ${tag}`,
    canonical: `${BASE_WEBSITE_URL}blog`,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: ['blockchain', 'blog', tag, 'danielbui12'].join(',')
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <div className="container blog-container">
        {
          tag && (
            <>
              <GoBackButton />
              <span className="badge badge-primary mt-4 mb-3"><span className="h5">{tag}</span></span>
            </>
          )
        }
        {
          blogContext.blogs.map((_item) => {
            return (
              <div className="mb-5" key={_item.code}>
                <Link to={`/blog/${_item.code}`} className="read-more">
                  <h6 className="title">{_item.title}</h6>
                </Link>
                <i className="pl-3">{moment(_item.timestamp).format('MMMM D, YYYY')}</i>
              </div>
            )
          })
        }
      </div>
    </DocumentMeta>
  )
}

export default Posts