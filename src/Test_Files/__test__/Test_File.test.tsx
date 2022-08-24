import { describe, expect, it } from 'vitest'
import App from '../../App'
import Login from '../../Login/Login'
import Assets from '../../Display/Assets'
import { render, screen, userEvent } from '../../test-utils'
import Test_File_1 from '../../Test_Files/Test_File_1'

describe('Simple working test', () => {

  it('the title is visible', () => {
    render(<Test_File_1 />)
    const data =  screen.getByRole('textbox')
    expect(data).toBeInTheDocument()
  })

  it('the title is visible - 1', () => {
    render(<Test_File_1 />)
    const data1 =  screen.getAllByRole('textbox')
    expect(data1.length).toBe(1)
  })

  it('the title is visible - 2', () => {
    render(<Test_File_1 />)
    const data1 =  screen.getByPlaceholderText('Enter your Email')
    expect(data1.innerHTML).toBe('')
  })
})
