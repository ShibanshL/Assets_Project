import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {MediaQuery, Text,Group, Button,Burger,Drawer} from '@mantine/core'
import axios from 'axios';


let i;

var auth_token: "1c8b4fc805dacf28f00a2b9efe1db8ad513162cc"

function Test() {
  const [data, setData] = React.useState({})
  const [opened, setOpened] = React.useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const [test,setTest] = React.useState({})

  const Data = () => {
    setData(
      {
        fist:'hi',
        noFisy:'ho'
      }
    )
  }
const Rdata = () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => setTest(res))
} 
  React.useEffect(() => {
    Rdata()

  },[])

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
        <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        <h1>Jab Harry met Sejal@@</h1>
      </Drawer>
        <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      title={title}
                    />
        <MediaQuery  query='(max-width: 500px)' styles={{padding:'5px 5px'}}>
          <Group p='10px 50px'>
            <Text>
              {JSON.stringify(data)}
              {JSON.stringify(test)}
            </Text>
          </Group>
        </MediaQuery>
    </div>
  )
}

export default Test