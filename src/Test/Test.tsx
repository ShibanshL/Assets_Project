import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Test() {
  const [data, setData] = React.useState({})
  const Data = () => {
    setData(
      {
        fist:'hi',
        noFisy:'ho'
      }
    )
  }
   var ab = [1,2,3,4,5,6]
  return (
    <div>
        <h3 onClick={Data}>
          <Link to=''>{ab.map(e => e)}</Link>
        </h3>
        <h2>
          {JSON.stringify(data)}
        </h2>
    </div>
  )
}

export default Test