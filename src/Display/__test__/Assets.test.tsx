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

it('Just rendering',() => {
    newRenderClient(<Cards data={mockData.data} check={check}/>)
})