import { useState } from 'react'
import { AppShell, Center, Container,Group,Grid, Navbar} from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import {QueryClientProvider, QueryClient} from 'react-query'
import Navtoolbar from './Navbar/Navtoolbar';
import Login from './Login/Login';
import Assets from './Display/Assets';
import Test from './Test/Test'
import SubTest from './Test/SubTest';
import Sub_Assets from './Display/Sub_Assets';
import { useStore_5 } from './Store';

const reactQuery = new QueryClient()
var i = 1

function App() {
const key = useStore_5(state => state.key)
  return (
    <QueryClientProvider client={reactQuery}>
      <Router>
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
            </Container>
        </AppShell>
      </Router>
    </QueryClientProvider>
  )
}

export default App
