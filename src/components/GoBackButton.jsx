import { Link } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md";

function GoBackButton() {
  return (
    <>
      <Link className="h6" to={-1}>
        <MdKeyboardArrowLeft className="mr-1 pb-1" size={20} />
        Go back
      </Link>
      <div className="mb-3"></div>
    </>
  )
}

export default GoBackButton