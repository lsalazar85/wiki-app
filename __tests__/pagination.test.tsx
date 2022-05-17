/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import Pagination from "../components/Pagination";

describe('Pagination', () => {
    it('should render successfully', () => {
        const { asFragment } = render(
            <Pagination
                pageCount={34}
                setPage={() => jest.fn()}
                currentPage={2}
            />
        )

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})