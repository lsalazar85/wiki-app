/**
 * @jest-environment jsdom
 */

import { render  } from '@testing-library/react'
import Modal from "../components/Modal";


describe('Modal', () => {
    it('should render successfully', () => {
        const { asFragment } = render(
            <Modal
                onClose={() => jest.fn()}
                title='Modal Test'
                visible={true}
            >
                <div>Content</div>
            </Modal>
        )

        expect(asFragment()).toBeDefined()
    })
})
