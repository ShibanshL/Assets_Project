import { describe, expect, it } from 'vitest'
import App from '../../App'
import Cards from '../Cards'
import Assets from '../Assets'
import Test_File_1 from '../../Test_Files/Test_File_1'
import { render, screen, userEvent } from '../../test-utils'
import { HiLogin } from 'react-icons/hi'
import { BrowserRouter } from 'react-router-dom'
import {QueryClientProvider, QueryClient } from 'react-query'
import { renderWithClient } from '../../test-utils'
import { newRenderClient } from '../../test-utils'
import { mockResponse,mockData } from '../../__mock__/axios'
import Login from '../../Login/Login'

var check = true

describe('Card', () => {

    it('First Mock call', () => {
        render(newRenderClient(<Login/>))
        const host = screen.getByText('Email')
        expect(host).toBeInTheDocument()
    })

    // it('Call all the data', async () => {
    //     render(newRenderClient(<Cards data={mockResponse} check={check}/>))
    //     const host = await screen.findAllByText(/192.168.00/i)
    //     expect(host).toBeInTheDocument()
    // })

}) 
