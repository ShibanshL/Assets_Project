import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Test() {

   var ab = [1,2,3,4,5,6]
  return (
    <div>
        <h3>
          <Link to=''>{ab.map(e => e)}</Link>
        </h3>
    </div>
  )
}

export default Test