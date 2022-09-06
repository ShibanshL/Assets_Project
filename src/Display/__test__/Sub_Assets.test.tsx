import { describe, expect, it } from "vitest";
import App from "../../App";
import Login from "../../Login/Login";
import Test_File_1 from "../../Test_Files/Test_File_1";
import { render, screen, userEvent } from "../../test-utils";
import { HiLogin } from "react-icons/hi";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderWithClient } from "../../test-utils";
import { newRenderClient } from "../../test-utils";
import TestD from "../../TestD/TestD";
import { createMemoryHistory } from "history";
import Assets from "../Assets";
import Cards from "../Cards";
import { mockData } from "../../__mock__/axios";
import Sub_Assets from "../Sub_Assets";

describe('Sub_Assets', () => {
    it('Test_1',  async () => {
        newRenderClient(<Sub_Assets />)
        // const name = await screen.findByText('192.168.00')
        // expect(name).toBeInTheDocument()
    })
})