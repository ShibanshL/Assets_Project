import { describe, expect, it } from "vitest";
import App from '../App'
import Login from "../Login/Login";
import { render, screen, userEvent } from "../test-utils";
import { HiLogin } from "react-icons/hi";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderWithClient } from "../test-utils";
import { newRenderClient } from "../test-utils";
import { createMemoryHistory } from "history";
import Assets from "../Display/Assets";
import Cards from "../Display/Cards";
import Sub_Assets from "../Display/Sub_Assets";

describe('Sub_Assets', () => {
    it('Test_1',  async () => {
        newRenderClient(<Sub_Assets />)
        // const name = await screen.findByText('192.168.00')
        // expect(name).toBeInTheDocument()
    })
})