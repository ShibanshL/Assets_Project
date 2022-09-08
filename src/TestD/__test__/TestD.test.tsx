import { describe, expect, it, vi, Mocked, Mock } from 'vitest'
import { render, screen, userEvent } from '../../test-utils'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import { Test } from 'vitest'
import { newRenderClient } from '../../test-utils'
import Login from '../../Login/Login'
import TestD from '../TestD'
import {testResponse} from '../../__mock__/Mock'
import { createMemoryHistory } from "history";
import { renderWithClient } from "../../test-utils";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


describe('first call', () => { 
    it('Lets do this', async () => {
        const history = createMemoryHistory();
          history.push("/test");
          const testComponent = renderWithClient(
            <Router location={history.location} navigator={history}>
              <Routes>
                <Route path="/test" element={<TestD />}></Route>
              </Routes>
            </Router>
          );

        // render(<TestD />)
        const name = await screen.findByText('Data_1')
        expect(name).toBeInTheDocument()
    })
 })