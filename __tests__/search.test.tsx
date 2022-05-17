/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Search from "../components/Search";

describe('Search', () => {
    it('should render successfully', () => {
        const { asFragment } = render(
            <Search onChange={() => jest.fn()} />
        )

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })

    it('should placeholder text ok', () => {
        render(<Search onChange={() => jest.fn()} />)

        const inputPlaceHolder = screen.getByPlaceholderText(/search character by name/i)

        expect(inputPlaceHolder).toBeInTheDocument()
        expect(inputPlaceHolder).toMatchSnapshot()
    })
})