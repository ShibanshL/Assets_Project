import { describe, expect, it, vitest, vi } from "vitest";
import { act, render, screen } from "../test-utils";
import { renderHook, waitFor } from "@testing-library/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderWithClient } from "../test-utils";
import { createMemoryHistory } from "history";
import Assets from "../Display/Assets";
// import { mockData } from "../../__mock__/axios";
import { matchMedia_Fn } from "../test-utils";
import { AUTH_KEY,LOGGED_JN_OUT, useStore } from "../Store";
import { Button } from "@mantine/core";
import { MockedData } from "../ResponseMock/AssetsMockResponse";
import Cards from "../Display/Cards";
import {userEvent} from '../test-utils'

var check = false;
var setCheck = () => {}
var cardChecked = false;
var setCardChecked = () => {}


describe('Assets Test',() => {

  beforeAll(() => {
    matchMedia_Fn()
   
  });

  beforeEach(() =>{
    const history = createMemoryHistory();
    history.push("/Assets");
    renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Assets />}></Route>
          </Routes>
      </Router>
    )
    const storehook = renderHook(() => LOGGED_JN_OUT((state:any) => state));
    act(() => storehook.result.current.setLogData(true));
  })

  it('First Random Test',async () => {
      // await waitFor(() => const history = createMemoryHistory();
    const history = createMemoryHistory();
      history.push("/Assets");
      renderWithClient(
        <Router location={history.location} navigator={history}>
            <Routes>
              <Route path="/Assets" element={<Assets />}></Route>
            </Routes>
        </Router>
      )
      const storehook = renderHook(() => LOGGED_JN_OUT((state:any) => state));
      act(() => storehook.result.current.setLogData(true));
      expect(screen.getByText("Assets")).toBeInTheDocument()
      // );
      // expect(testComponent).toMatchSnapshot();
  })

  it('Second Random Test',async () => {
    // await waitFor(() =>
    expect(screen.getByText("Current Filters")).toBeInTheDocument()
    // );
    // expect(testComponent).toMatchSnapshot();
  })

 
  it('Finding button 1',async () => {
    // await waitFor(() =>
      expect(screen.getByRole('button',{name:'Delete'})).toBeDisabled()
    // );
  })

  it('Finding Button 2', async () => {
    // await waitFor(() => {
      expect(screen.getByRole('button',{name:'Show Filters'})).toBeInTheDocument()
    // })
  })

  it('Clicking on show filters button', async () => {
    // await waitFor(() => {
      const name = screen.getByRole('button',{name:'Show Filters'})
      userEvent.click(name)
      expect(name.textContent).toBe("Hide Filters")
    // })
  })

  it('show filters form search based on place holder', async () => {
    // await waitFor(() => {
      const name = screen.getByRole('button',{name:'Show Filters'})
      userEvent.click(name)
      expect(screen.getByPlaceholderText('Pick for a type')).toBeInTheDocument()
    // })
  })

  it('show filters form search based on text', async () => {
    // await waitFor(() => {
      const name = screen.getByRole('button',{name:'Show Filters'})
      userEvent.click(name)
      expect(screen.getByText('Search')).toBeInTheDocument()
    // })
  })

  it('type Form data', async () => {
    // await waitFor(() => {
      const name = screen.getByRole('button',{name:'Show Filters'})
      userEvent.click(name)
      const type = screen.getByPlaceholderText('Search')
      userEvent.type(type,'192.168.00.20')
      expect(screen.getByPlaceholderText('Search')).toHaveValue('192.168.00.20')
      // userEvent.click(screen.getByRole('Apply'))
      // expect(window.location.href).toContain('&search=192.168.00.20')
    // })
  })

  it('submit Form data', async () => {const history = createMemoryHistory();
    history.push("/Assets");
    const testComponent = renderWithClient(
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Assets />}></Route>
          </Routes>
      </Router>
    )
    const storehook = renderHook(() => LOGGED_JN_OUT((state:any) => state));
    act(() => storehook.result.current.setLogData(true));
    // expect(testComponent).toMatchSnapshot()
    await waitFor(() => {
      expect(screen.getByText("Assets")).toBeInTheDocument()
      // const name = screen.getByRole('button',{name:'Show Filters'})
      // userEvent.click(name)
      // const type = screen.getByPlaceholderText('Search')
      // userEvent.type(type,'192.168.00.20')
      // const apply = screen.getByRole('button',{name:'Apply'})
      // userEvent.click(apply)
      // expect(window.location.href).toContain('&search=192.168.00.20')
    })
    // screen.getAllByRole('')

    // expect(testComponent).toMatchSnapshot()
    const name = screen.getByRole('button',{name:'Show Filters'})
    userEvent.click(name)
    const type = screen.getByPlaceholderText('Search')
    userEvent.type(type,'192.168.00.20')
    expect(testComponent).toMatchSnapshot()

    const apply = screen.getAllByRole('')
    // userEvent.click(apply)
    // expect(window.location.href).toContain('&search=192.168.00.20')

  })

})

