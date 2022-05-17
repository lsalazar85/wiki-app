/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import Header from "../components/Header";

describe('Header', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Header />)

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})