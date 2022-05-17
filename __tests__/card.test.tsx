/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import Card from "../components/Card";


describe('Card', () => {
    it('should render successfully', () => {
        const { asFragment } = render(<Card data={}/>)

        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toBeDefined()
    })
})
