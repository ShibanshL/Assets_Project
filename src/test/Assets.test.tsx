import { describe, expect, it, vitest, vi } from "vitest";
import { act, render, screen, userEvent } from "../test-utils";
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





describe('Assets Test',() => {

  beforeAll(() => {
    matchMedia_Fn()
  });

  it('First Random Test',async () => {
      const history = createMemoryHistory();
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
      await waitFor(() =>
      expect(testComponent.getByText("Assets")).toBeInTheDocument()
      );
      // expect(testComponent).toMatchSnapshot();
  })

  it('Second Random Test',async () => {
    const history = createMemoryHistory();
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
    await waitFor(() =>
    expect(testComponent.getByText("Current Filters")).toBeInTheDocument()
    );
    // expect(testComponent).toMatchSnapshot();
  })

  it('Filter section test 1',async () => {
    const history = createMemoryHistory();
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
    const filter_Button = screen.findByText('Show Filters')
    await waitFor(() =>
      expect(testComponent.getByRole(Button)).toBeInTheDocument()
    );
    // expect(testComponent).toMatchSnapshot();
  })

})

