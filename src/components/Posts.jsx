import moment from "moment"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_FILE_URL } from '../utils/constant'
import GoBackButton from './GoBackButton'

function Posts() {
  const [posts, setPosts] = useState([])
  const { tag } = useParams()

  useEffect(() => {
    fetch(BASE_FILE_URL + 'main.json')
      .then(response => response.text())
      .then(response => {
        let _posts = JSON.parse(response)
        if (tag) {
          _posts = _posts.filter(_post => _post.tag.includes(tag))
        }
        setPosts(_posts)
      })
      .catch(err => console.log(err))
  }, [tag]);

  return (
    <>
      {
        tag && (
          <>
            <GoBackButton />
            <span className="badge badge-primary mt-5 mb-3"><span className="h5">{tag}</span></span>
          </>
        )
      }
      {
        posts.map((_item) => {
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
    </>
  )
}

export default Posts