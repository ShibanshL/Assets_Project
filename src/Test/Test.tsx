import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {MediaQuery, Text,Group, Button} from '@mantine/core'


let i;
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

  const a = () => {
    for(i=0; i<5; i++){
      console.log('i ',i)
      // return(
      //   <>
      //     <Button>{i}</Button>
      //   </>
      // )
    }
  }

   var ab = [1,2,3,4,5,6]
  return (
    <div>
        <h3 onClick={Data}>
          <Link to=''>{ab.map(e => e)}</Link>
        </h3>
        {/* {setInterval(()=>{a()},1000)} */}
        {a()}
        <Button>{i}</Button>
        <MediaQuery  query='(max-width: 500px)' styles={{padding:'5px 5px'}}>
          <Group p='10px 50px'>
            <Text>
              {JSON.stringify(data)}
            </Text>
          </Group>
        </MediaQuery>
    </div>
  )
}

export default Test