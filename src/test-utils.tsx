/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach,vi } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import axios from "axios";
import { PostLoginResMock } from "./ResponseMock/getLoginResMock";
import {MockedData, Sub_Assets_First, Sub_Assets_Second} from './ResponseMock/AssetsMockResponse'
import {urlParam} from './ResponseMock/getLoginResMock'


afterEach(() => {
  cleanup();
});
axios.defaults.headers.common["Authorization"] =
  "Token 8431916c2a4e2f97718632fc1a912c363a80bac9";
export const handlers = [
  rest.post("*/api/auth/token/login/", (req, res, ctx) => {
    // req.headers;
    return res(
      ctx.status(200),
      ctx.set({
        Authorization: `Token hkshfkhfhdsifhdikufsdki`,
        "Content-Type": ["application/json", "application/hal+json"],
        "Content-Length": "40032",
      }),
      ctx.json(PostLoginResMock)
    );
  }),

  rest.get(`*/api/org/18/asset/`,
    (req, res, ctx) => {
      return res(
        ctx.set({
          "Authorization":"Token e1c56fee92f768d8198bd5832d04d4e6817b409a"
      }),
        ctx.status(200),
        ctx.json(MockedData))
    }),
    
    rest.get(`*/api/org/18/asset/${urlParam}`,
    (req, res, ctx) => {
      return res( 
        ctx.status(200),
        ctx.json(Sub_Assets_First)
      )
    }),

    rest.get(`*/api/org/18/asset/${urlParam}/cycles`,
    (req, res, ctx) => {
      return res( 
        ctx.status(200),
        ctx.json(Sub_Assets_Second)
      )
    })
  
   

];

// export const Handler_2 = [

// ]

const reactQuery = new QueryClient();

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    // logger: {
    //     log: console.log,
    //     warn: console.warn,
    //     error: () => {},
    // }
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export const matchMedia_Fn = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  });
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export function newRenderClient(Name: any) {
  return (
    <QueryClientProvider client={reactQuery}>
      <BrowserRouter>{Name}</BrowserRouter>
    </QueryClientProvider>
  );
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { renderWithClient as render };
