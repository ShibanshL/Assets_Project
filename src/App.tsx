import { useState } from 'react'
import { AppShell, Center, Container,Group,Grid, Navbar} from '@mantine/core';
import { Routes, Route } from 'react-router-dom'; 
import Navtoolbar from './Navbar/Navtoolbar';
import {QueryClientProvider, QueryClient} from 'react-query'
import Login from './Login/Login';
import Assets from './Display/Assets';
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
                  </Routes>
                </Grid.Col>
              </Grid>
            </Container>
        </AppShell>
    </QueryClientProvider>
  )
}

export default App
