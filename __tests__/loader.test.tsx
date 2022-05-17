/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import Loader from "../components/Loader";

describe('Loader', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Loader />)

        expect(asFragment()).toBeDefined()
    })
})
