import { describe, expect, it } from 'vitest'
import Cards from "../Display/Cards";
import { render, screen, userEvent,waitFor,renderHook,act } from "../test-utils";
import { createMemoryHistory } from "history";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { renderWithClient } from "../test-utils";
import { MockedData } from '../ResponseMock/AssetsMockResponse';
import { matchMedia_Fn } from "../test-utils";
import Assets from '../Display/Assets';
import { LOGGED_JN_OUT } from '../Store';

var check = false;
var setCheck = () => {}
var cardChecked = false;
var setCardChecked = () => {}

describe("Card", () => {

  beforeAll(() => {
    matchMedia_Fn()
  });

  it('Checking the first card', async () => {
    const history = createMemoryHistory();
    history.push("/Assets");
    renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Cards data={MockedData.data.results} check={check} />}></Route>
          </Routes>
      </Router>
    )
    const host = await screen.findByText('192.168.00.20')
    expect(host).toBeInTheDocument()
  })

  it('Checking the second card', async () => {
    const history = createMemoryHistory();
    history.push("/Assets");
    renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Cards data={MockedData.data.results} check={check} setCheck={setCheck} cardChecked={cardChecked} setCardChecked={setCardChecked} />}></Route>
          </Routes>
      </Router>
    )
    const host = await screen.findByText('device_00.13')
    expect(host).toBeInTheDocument()
  })

  it('Checking the last card', async () => {
    const history = createMemoryHistory();
    history.push("/Assets");
    renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Cards data={MockedData.data.results} check={check} setCheck={setCheck} cardChecked={cardChecked} setCardChecked={setCardChecked} />}></Route>
          </Routes>
      </Router>
    )
    const host = await screen.findByText('192.168.00.98')
    expect(host).toBeInTheDocument()
  })

  it('Checking multipleCard', async () => {
    const history = createMemoryHistory();
    history.push("/Assets");
    renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Cards data={MockedData.data.results} check={check} setCheck={setCheck} cardChecked={cardChecked} setCardChecked={setCardChecked} />}></Route>
          </Routes>
      </Router>
    )
    const card_all = await screen.findByRole('My_Cards')
    expect(card_all).toContain('192.168.00')
  })

  it('Checking if going to sub Assets', async () => {
    const history = createMemoryHistory();
    history.push("/Assets");
    renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Cards data={MockedData.data.results} check={check} setCheck={setCheck} cardChecked={cardChecked} setCardChecked={setCardChecked} />}></Route>
          </Routes>
      </Router>
    )
    const host = await screen.findAllByRole('Sub_Link')
    expect(global.window.location.href).toContain('/Asset/') 
  })

});
