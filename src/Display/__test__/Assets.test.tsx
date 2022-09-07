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

function test(){
    const history = createMemoryHistory();
                history.push("/");
                const testComponent = renderWithClient(
                    <Router location={history.location} navigator={history}>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                    </Routes>
                    </Router>
                );
            const name = screen.getByPlaceholderText('Enter your Email')
            const pass = screen.getByPlaceholderText('Password')
            const button_Log = screen.getByRole('button',{name:'Login'})
            userEvent.type(name, 'shibansh@parham.in')
            userEvent.type(pass,'123456789')
            userEvent.click(button_Log)
}

describe('Assets Test',() => {
    beforeAll(() => {
          it('Logging in ', () => {
            const history = createMemoryHistory();
                history.push("/");
                const testComponent = renderWithClient(
                    <Router location={history.location} navigator={history}>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                    </Routes>
                    </Router>
                );
            const name = screen.getByPlaceholderText('Enter your Email')
            const pass = screen.getByPlaceholderText('Password')
            const button_Log = screen.getByRole('button',{name:'Login'})
            userEvent.type(name, 'shibansh@parham.in')
            userEvent.type(pass,'123456789')
            userEvent.click(button_Log)
          })
       
    })

    it('Just rendering',async () => {
        test()
        const history = createMemoryHistory();
        history.push("/Assets");
        renderWithClient(
          <Router location={history.location} navigator={history}>
              <Routes>
               <Route path="/Assets" element={<Assets />}></Route>
              </Routes>
          </Router>
        )
          const name_1 = await screen.findByText('Current')
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
          const name_1 = await screen.findByText('Show Filters')
          expect(name_1).toBeInTheDocument()
    })

})

