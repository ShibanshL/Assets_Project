import React from 'react'
import {useSearchParams} from 'react-router-dom'

function Test() {

    const [searchParams,setSearchParams] = useSearchParams()
    React.useEffect(() =>{
        setSearchParams({age:69})
    },[])
    searchParams.get('age')

  return (
    <div>
        <h1 style={{color:'black'}}>TESTING IS GOING ON!!</h1>
        <h2>{searchParams.get('age')}</h2>
        <button onClick={() => setSearchParams({age:50})} >increment</button>
    </div>
  )
}

export default Test