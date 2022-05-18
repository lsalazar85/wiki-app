import { render, screen } from '@testing-library/react'
import Search from "./index";

describe('Search', () => {
    it('should render successfully', () => {
        const { asFragment } = render(
            <Search />
        )

        expect(asFragment()).toBeDefined()
    })

    it('should placeholder text ok', () => {
        render(<Search />)

        const inputPlaceHolder = screen.getByPlaceholderText(/search by name/i)

        expect(inputPlaceHolder).toBeInTheDocument()
    })
})
