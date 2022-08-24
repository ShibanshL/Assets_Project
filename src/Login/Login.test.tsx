import { describe, expect, it } from 'vitest'
import App from '../App'
import Login from './Login'
import Test_File_1 from '../Test_Files/Test_File_1'
import { render, screen, userEvent } from '../test-utils'
import { HiLogin } from 'react-icons/hi'
import { BrowserRouter } from 'react-router-dom'
import {QueryClientProvider, QueryClient } from 'react-query'

const reactQuery = new QueryClient()

const Mock = () => {
    return(
        <QueryClientProvider client={reactQuery}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </QueryClientProvider>
    )
}
describe('Login simple test ', () => {

    it('check someting', () => {
        render(<Mock />)
        const name = screen.getByText('Email')
        expect(name).toBeInTheDocument()
    })

    it('check someting_1', () => {
        render(<Mock />)
        const name = screen.getByText('Email')
        expect(name).toBeTruthy()
    })

    it('check someting_2', () => {
        render(<Mock />)
        const name = screen.getByText('Email')
        expect(name).toContainHTML('label')
    })

    it('check someting_3', () => {
        render(<Mock />)
        const name = screen.getByPlaceholderText('Enter your Email')
        expect(name).toContainHTML('input')
    })

    it('check someting_4', () => {
        render(<Mock />)
        const name = screen.getByPlaceholderText('Enter your Email')
        expect(name).not.toContainHTML('button')
    })

}) 