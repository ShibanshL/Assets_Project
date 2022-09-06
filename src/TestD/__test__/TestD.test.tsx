import { describe, expect, it, vi } from 'vitest'
import { render, screen, userEvent } from '../../test-utils'
// import { newRenderClient } from '../../test-utils'
import { Test } from 'vitest'
import { newRenderClient } from '../../test-utils'
import Login from '../../Login/Login'
import TestD from '../TestD'

const axios = require('axios')

// vi.mock(axios)

describe('Simple mock test', () => {

    it('first Try', async () => {
        // const mockRes = {
        //     data:
        //     { 
        //         userName:'chadisnothere',
        //         myFirst:'CoolDube',
        //         age:'23'
        //     }
        // }
        // axios.get.mockResolvedValue(mockRes)

        // const Test = require('../Test')
        // Test.Rdata()

        render(<TestD />)
        const name = screen.findByText('Bret')
        expect(name).toBeTruthy()
    })
}) 