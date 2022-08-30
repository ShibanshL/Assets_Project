import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {MediaQuery, Text,Group, Button,Burger,Drawer} from '@mantine/core'
import axios from 'axios';


interface ada {
  data:{
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
  }
 
}


function TestD() {

  const [test,setTest] = React.useState({})

const Rdata =() => {
  axios.get('http://jsonplaceholder.typicode.com/users/1')
  .then(res => {setTest(res);console.log(res)})
} 

React.useEffect(() => {
  Rdata()
}, [])

  return (
    <div>
        <MediaQuery  query='(max-width: 500px)' styles={{padding:'5px 5px'}}>
          <Group p='10px 50px'>
            <h1>Hi</h1>
            <h2>{test.data?.username}</h2>
            <Text>
              {JSON.stringify(test)}
            </Text>
          </Group>
        </MediaQuery>
    </div>
  )
}

// module.exports = {Rdata()}


export default TestD

// export {Rdata}