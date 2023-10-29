import moment from "moment"
import { Link } from "react-router-dom"

function Posts() {
  const postTitle = 'consectetur-adipisicing-elit'

  return (
    <div>
      <div className="mb-5">
        <Link to={postTitle} className="read-more">
          <h6 className="title">Consectetur adipisicing elit</h6>
        </Link>
        <i className="pl-3">{moment().format('MMMM D, YYYY')}</i>
      </div>
    </div>
  )
}

export default Posts