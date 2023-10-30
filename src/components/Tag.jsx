/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { HashTag } from './Icons'

function Tag({ values = [] }) {
  return (
    <>
      {
        values.map((_tag) => {
          return (
            <Link key={`/tag/${_tag}`} to={`/tag/${_tag}`} className='tag'>
              <HashTag />{_tag}
            </Link>
          )
        })
      }
    </>
  )
}

export default Tag