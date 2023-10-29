import { Link } from "react-router-dom"

function GoBackButton() {
  return (
    <>
      <Link className="h6" to={-1}>
        <i className="ti-angle-left mr-1"></i>
        Go back
      </Link>
      <div className="mb-3"></div>
    </>
  )
}

export default GoBackButton