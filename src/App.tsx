import { useState } from 'react'
import { AppShell, Center, Container,Group,Grid, Navbar} from '@mantine/core';
import { Routes, Route } from 'react-router-dom'; 
import Navtoolbar from './Navbar/Navtoolbar';
import {QueryClientProvider, QueryClient} from 'react-query'
import Test_File_1 from './Test_Files/Test_File_1';
import Test_File_2 from './Test_Files/Test_File_2';
import Login from './Login/Login';
import Assets from './Display/Assets';
import Test from './TestD/TestD'
import SubTest from './TestD/SubTest';
import Sub_Assets from './Display/Sub_Assets';

const reactQuery = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={reactQuery}>
        <AppShell
          padding={0}
          styles={(theme) => ({
            main: {background:'white',backgroundSize:'cover'},
          })}>
            <Container size={1920} p='0' m='0' style={{}} fluid>
              <Grid>
                <Grid.Col span={12}>
                  <Navtoolbar />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Assets' element={<Assets />} />
                    <Route path={`/Asset/:keyID`} element={<Sub_Assets />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='/test/ada' element={<SubTest />} />
                  </Routes>
                </Grid.Col>
              </Grid>
              {/* <Grid grow>
                <Grid.Col span={12}>
                    <Test_File_1 />
                </Grid.Col>
              </Grid>
              <Test_File_2 /> */}
            </Container>
        </AppShell>
    </QueryClientProvider>
  )
}

export default App
