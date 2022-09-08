import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { graphql, rest } from 'msw'
import { Test } from 'vitest'
import { newRenderClient } from './test-utils'
import Login from './Login/Login'
// import TestD from './TestD'
import {testResponse, MockedData} from './__mock__/Mock'
import {vi} from 'vitest';
import '@testing-library/jest-dom'
import 'whatwg-fetch'
import axios from "axios";



// axios.defaults.headers.common["Authorization"] =
//   "Token e1c56fee92f768d8198bd5832d04d4e6817b409a";
export const restHandlers = [
    rest.get(`${import.meta.env.VITE_URL}/api/org/18/asset/?page_size=20&page=1`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.set({
            "Authorization":"Token e1c56fee92f768d8198bd5832d04d4e6817b409a"
        }),
        ctx.json(MockedData))
    }),
  ]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
