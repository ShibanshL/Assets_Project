import { describe, expect, it, vitest } from "vitest";
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
import { AUTH_KEY } from "../../Store";

var check = true

var results = [
    {
        cve_status_distribution:{},
        display_name: "device_00.20",
        host: "192.168.00.20",
        scan_cycle_count:1,
        type:"infra",
        tags: [
            {
                0:"database 20",
                1:"server 20"
            }
        ],
        unique_id:"04009331-d76e-4f84-99fc-893e73fcfb68",
        vuln_breakup:{}
    },
    
    {
        cve_status_distribution:{},
        display_name: "device_00.20",
        host: "192.168.00.20",
        scan_cycle_count:1,
        type:"infra",
        tags: [
            {
                0:"database 20",
                1:"server 20"
            }
        ],
        unique_id:"04009331-d76e-4f84-99fc-893e73fcfb68",
        vuln_breakup:{}
    }
]

// const setToken = AUTH_KEY((state:any) => state.setToken)

// function Logged_IN(){
//     // const setToken = AUTH_KEY((state:any) => state.setToken)
//     setToken('e1c56fee92f768d8198bd5832d04d4e6817b409a')
// }

// function Logged_OUT(){
//     // const setToken = AUTH_KEY((state:any) => state.setToken)
//     setToken('')
// }

describe('Assets Test',() => {
    it('Just rendering',async () => {
        const history = createMemoryHistory();
        history.push("/Assets");
        renderWithClient(
          <Router location={history.location} navigator={history}>
              <Routes>
               <Route path="/Assets" element={<Assets />}></Route>
              </Routes>
          </Router>
        )
        const name_1 = await screen.findByText('192.168.00.20')
        expect(name_1).toBeInTheDocument()
    })

    it('Just rendering_1',async () => {
        const history = createMemoryHistory();
        history.push("/Assets");
        renderWithClient(
          <Router location={history.location} navigator={history}>
              <Routes>
               <Route path="/Assets" element={<Assets />}></Route>
              </Routes>
          </Router>
        )
          const name_1 = await screen.findByText('Loading')
          expect(name_1).toBeInTheDocument()
    })

})

