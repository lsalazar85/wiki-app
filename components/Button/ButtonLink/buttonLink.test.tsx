import { render  } from '@testing-library/react'
import ButtonLink from './index';

describe('ButtonLink', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<ButtonLink text='Button' href='/episodes' />)

        expect(asFragment()).toBeDefined()
    })
})
