/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import axios from "axios";
import { PostLoginResMock } from "./getLoginResMock";

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
];
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
