/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { HashTag } from './Icons'

function Tag({ name }) {
  return (
    <Link to={name} className='tag'>
      <HashTag />{name}
    </Link>
  )
}

export default Tag