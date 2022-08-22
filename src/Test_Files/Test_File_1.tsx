import React from 'react'
import { AppShell, Center, Container,Group,Grid, Navbar, Text, Button} from '@mantine/core';

function Test_File_1() {
    const [data,setData] = React.useState('Random Text')
    const condition = () => {
        if(data == 'Random Text'){
            setData('Just Clicked')
        }
        else{
            setData('Random Text')
        }
    }
  return (
    <Grid p='20vh 0' style={{background:'cyan'}}>
        <Grid.Col span ={12}>
            <Container p='10px' size={800} style={{background:'pink'}}>
                <Group position='center'>
                    <Text>{data}</Text>
                    <Button onClick={() => condition()}>Change Text</Button>
                </Group>
            </Container>
        </Grid.Col>
    </Grid>
  )
}

export default Test_File_1