import { describe, expect, it } from 'vitest'
import App from '../App'
import Login from './Login'
import Test_File_1 from '../Test_Files/Test_File_1'
import { render, screen, userEvent } from '../test-utils'
import { HiLogin } from 'react-icons/hi'

// describe('simple test ', () => {
    it('check someting', () => {
        render(<Test_File_1 />)
        // const name = screen.getByText('Email')
        // expect(name).toBeInTheDocument()
    })
// }) 