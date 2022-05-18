import { render  } from '@testing-library/react'
import Filter from './index';

describe('Filter', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Filter />)

        expect(asFragment()).toBeDefined()
    })
})
