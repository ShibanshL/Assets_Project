import { describe, expect, it } from 'vitest'
import App from '../App'
import Cards from "../Display/Cards";
import Assets from "../Display/Assets";
import { render, screen, userEvent } from "../test-utils";
import { createMemoryHistory } from "history";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { renderWithClient } from "../test-utils";
import { newRenderClient } from "../test-utils";
import Login from "../Login/Login";
import { Grid } from '@mantine/core';
import { MockedData } from '../ResponseMock/AssetsMockResponse';
import { matchMedia_Fn } from "../test-utils";

var check = false;

describe("Card", () => {

  beforeAll(() => {
    matchMedia_Fn()
  });

  it.only('Call all the data', async () => {
      const history = createMemoryHistory();
      history.push("/Assets");
      renderWithClient(
        <Router location={history.location} navigator={history}>
            <Routes>
            {/* <Cards data={MockedData.data.results} check={check} /> */}
             <Route path="/Assets" element={<Cards data={MockedData.data.results} check={check} />}></Route>
            </Routes>
        </Router>
      )
      const host = await screen.findByText('192.168.00.20')
      expect(host).toBeInTheDocument()
  })
});
