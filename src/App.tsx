import { useState } from 'react'
import { AppShell, Center, Container,Group,Grid, Navbar} from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import {QueryClientProvider, QueryClient} from 'react-query'
import Test_File_1 from './Test_Files/Test_File_1';
import Test_File_2 from './Test_Files/Test_File_2';

const reactQuery = new QueryClient()

function App() {
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
                  <Grid.Col span={12}><Test_File_1/></Grid.Col>
                  <Grid.Col span={12}><Test_File_2/></Grid.Col>
                </Grid>
            </Container>
        </AppShell>
      </Router>
    </QueryClientProvider>
  )
}

export default App
