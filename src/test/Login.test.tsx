import { describe, expect, it, vi } from 'vitest'
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
import { renderHook, waitFor } from "@testing-library/react";


var check = false;

vi.useFakeTimers()

const testTimeout = async (e:number) => {
    vi.advanceTimersByTime(e)
  }

describe("Login", () => {

  beforeAll(() => {
    matchMedia_Fn()
  });



 
   it('check someting_5', async () => {
        const history = createMemoryHistory();
        history.push("/");
        const testComponent = renderWithClient(
        <Router location={history.location} navigator={history}>
            <Routes>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </Router>
        )
        const name = screen.getByPlaceholderText('Enter your Email')
        const pass = screen.getByPlaceholderText('Password')
        const button_Log = screen.getByRole('button',{name:'Login'})
        userEvent.type(name, 'shibansh@parham.in')
        userEvent.type(pass,'123456756')
        userEvent.click(button_Log)
        await testTimeout(2000)
        await waitFor(() => {
            expect(testComponent.findByText("Invalid credentials, please Reload and Try again.")).toBeInTheDocument()
        })
        // await testTimeout(2000)

        // expect( screen.findByText("Invalid credentials, please Reload and Try again.")).toBeInTheDocument()

    })

   
});
