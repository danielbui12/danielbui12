import moment from "moment"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_FILE_URL } from '../utils/constant'

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
    <div>
      {
        posts.map((_item) => {
          return (
            <div className="mb-5" key={_item.code}>
              <Link to={_item.code} className="read-more">
                <h6 className="title">{_item.title}</h6>
              </Link>
              <i className="pl-3">{moment(_item.timestamp).format('MMMM D, YYYY')}</i>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts