import { describe, expect, it } from 'vitest'
import App from '../../App'
import Login from '../Login'
import Test_File_1 from '../../Test_Files/Test_File_1'
import { render, screen, userEvent } from '../../test-utils'
import { HiLogin } from 'react-icons/hi'
import { BrowserRouter } from 'react-router-dom'
import {QueryClientProvider, QueryClient } from 'react-query'
import { renderWithClient } from '../../test-utils'
import { newRenderClient } from '../../test-utils'

const reactQuery = new QueryClient()
// const Mock = (history:any) => {
//     return(
//         <QueryClientProvider client={reactQuery}>
//             <BrowserRouter>
//                 <Login />
//             </BrowserRouter>
//         </QueryClientProvider>
//     )
// }

describe('Login', () => {

    it('check someting', async() => {
        // const res = renderWithClient(<Login />)
        render(newRenderClient(<Login />))
        const name = screen.getByText('Email')
        expect(name).toBeInTheDocument()
    })

    it('check someting_1', () => {
        render(newRenderClient(<Login />))
        const name = screen.getByText('Email')
        expect(name).toBeTruthy()
    })

    it('check someting_2', () => {
        render(newRenderClient(<Login />))
        const name = screen.getByText('Email')
        expect(name).toContainHTML('label')
    })

    it('check someting_3', () => {
        render(newRenderClient(<Login />))
        const name = screen.getByPlaceholderText('Enter your Email')
        expect(name).toContainHTML('input')
    })

    it('check someting_4', () => {
        render(newRenderClient(<Login />))
        const name = screen.getByPlaceholderText('Enter your Email')
        expect(name).not.toContainHTML('button')
    })

    
    // it('check someting_5', async () => {
    //     render(newRenderClient(<Login />))
    //     const name = screen.getByPlaceholderText('Enter your Email')
    //     const pass = screen.getByPlaceholderText('Password')
    //     const button_Log = screen.getByRole('button',{name:'Login'})
    //     userEvent.type(name, 'shibansh@parham.in')
    //     userEvent.type(pass,'123456789')
    //     userEvent.click(button_Log)
    //     const url = await window.location.pathname
    //     expect(url).toBe('/Assets')
    //     // expect(name).not.toContainHTML('button')
    // })

    it('check someting_6', async () => {
        render(newRenderClient(<Login />))
        const name = screen.getByPlaceholderText('Enter your Email')
        const pass = screen.getByPlaceholderText('Password')
        const button_Log = screen.getByRole('button',{name:'Login'})
        userEvent.type(name, 'shibansh@parham.in')
        userEvent.type(pass,'123456897')
        userEvent.click(button_Log)
        const invalid = await console.warn('AxiosError')
        expect(invalid).toBeVisible()
        // expect(name).toBeInTheDocument()
    })


}) 