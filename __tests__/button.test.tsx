/**
 * @jest-environment jsdom
 */


import { render  } from '@testing-library/react'
import Button from "../components/Button/ButtonForm";

describe('Button', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Button text='Button' fn={jest.fn()} />)

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})
