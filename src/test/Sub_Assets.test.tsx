import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../test-utils";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderWithClient,act } from "../test-utils";
import { createMemoryHistory } from "history";
import { renderHook, waitFor } from "@testing-library/react";
import Sub_Assets from "../Display/Sub_Assets";
import { matchMedia_Fn } from "../test-utils";
import { urlParam } from "../ResponseMock/getLoginResMock";
import { AUTH_KEY,LOGGED_JN_OUT, useStore } from "../Store";


// const keyID = '04009331-d76e-4f84-99fc-893e73fcfb68'

describe('Sub_Assets', () => {
    beforeAll(() => {
        matchMedia_Fn()
    })
    
    it('First_Test',  async () => {
       const history = createMemoryHistory();
       history.push(`/Asset/${urlParam}`);
       const testComponent = renderWithClient(
         <Router location={history.location} navigator={history}>
             <Routes>
               <Route path={`/Asset/${urlParam}`}  element={<Sub_Assets />}></Route>
             </Routes>
         </Router>
       )
       const storehook = renderHook(() => LOGGED_JN_OUT((state:any) => state));
        act(() => storehook.result.current.setLogData(true));
       await waitFor(() => {
        expect(testComponent.getByText('192.168.00.20')).toBeInTheDocument()
       })
    //    const name = await screen.findByText('192.168.00.20')
    //    expect(name).toBeInTheDocument()
    })
})