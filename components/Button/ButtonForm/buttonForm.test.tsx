import { render  } from '@testing-library/react'
import ButtonForm from './index';

describe('ButtonForm', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<ButtonForm text='Button' />)

        expect(asFragment()).toBeDefined()
    })
})
