/**
 * @jest-environment jsdom
 */

import { MockedProvider } from "@apollo/react-testing";
import {render, screen } from '@testing-library/react'
import Home from "../pages";
import { mocks } from "../__mocks__/mocks";

describe('Home', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
    )

    expect(asFragment()).toMatchSnapshot();
    expect(asFragment()).toBeDefined()
  })

  it('should first render buttons elements successfully ', () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
    );

    const clearBtn = screen.getByRole('button', { name: /clear search/i })
    const nextBtn = screen.getByRole('button', { name: /next/i })
    const prevBtn = screen.getByRole('button', { name: /prev/i })

    expect(clearBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()
    expect(prevBtn).toBeInTheDocument()
  })
})
