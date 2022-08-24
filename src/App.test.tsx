import { describe, expect, it } from 'vitest'
import App from './App'
import Login from './Login/Login'
import Assets from './Display/Assets'
import { render, screen, userEvent } from './test-utils'
import Test_File_1 from './Test_Files/Test_File_1'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Test_File_1 />)
  })
})
