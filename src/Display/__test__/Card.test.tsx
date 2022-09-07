import { describe, expect, it } from 'vitest'
import App from "../../App";
import Cards from "../Cards";
import Assets from "../Assets";
import Test_File_1 from "../../Test_Files/Test_File_1";
import { render, screen, userEvent } from "../../test-utils";
// import { HiLogin } from "react-icons/hi";
import { createMemoryHistory } from "history";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import { QueryClientProvider, QueryClient } from 'react-query';
import { renderWithClient } from "../../test-utils";
import { newRenderClient } from "../../test-utils";
import { mockResponse, mockData } from "../../__mock__/axios";
import Login from "../../Login/Login";
import { Grid } from '@mantine/core';

var check = false;

const mockData_1 = 
    {
      data:
        [ 
          {
              cve_status_distribution:{},
              display_name: "device_00.20",
              host: "192.168.00.20",
              scan_cycle_count:1,
              type:"infra",
              tags:['database 20','server 20'],
              unique_id:"04009331-d76e-4f84-99fc-893e73fcfb68",
              vuln_breakup:{}
          }            
        ]
    }

describe("Card", () => {

  // it("First Mock call", () => {
  //   const history = createMemoryHistory();
  //   history.push("/");
  //   const testComponent = renderWithClient(
  //     <Router location={history.location} navigator={history}>
  //       <Routes>
  //         <Route path="/" element={<Login />}></Route>
  //       </Routes>
  //     </Router>
  //   );
  //   expect(testComponent).toMatchSnapshot();
  // });

  it.only('Call all the data', async () => {
      const history = createMemoryHistory();
      history.push("/Assets");
      renderWithClient(
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/Assets" element={<Cards data={mockData_1.data} check={check} />}></Route>
            </Routes>
        </Router>
      )
      const host = await screen.findByText('192.168.000')
      expect(host).toBeInTheDocument()
  })

  it('Call all the data_1', async () => {
    // newRenderClient(<Assets/>)
    render(<Cards data={mockData.data} check={check} />)
    const host = await screen.findByText('192.168.000')
    expect(host).toBeInTheDocument()
  })

  it('Call all the data_2', async () => {
    // newRenderClient(<Assets/>)
    render(<Cards data={mockResponse} check={check} />)
    const host = await screen.findByText('192.168.000')
    expect(host).toBeInTheDocument()
  })
});
