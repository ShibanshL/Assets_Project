import React from 'react'
import { AppShell, Center, Container,Group,Grid, Text, Button} from '@mantine/core';

function Test_File_2() {
    const [data,setData] = React.useState(1)
  return (
    <Grid p='20vh 0' style={{background:'lightgreen'}}>
        <Grid.Col span ={12}>
            <Container p='10px' size={800} style={{background:'yellow'}}>
                <Group position='center'>
                    <Text>{data}</Text>
                    <Button onClick={() => setData(data+1)}>Add</Button>
                </Group>
            </Container>
        </Grid.Col>
    </Grid>
  )
}

export default Test_File_2