import React from 'react'
import { render } from '@testing-library/react'
import Landing from './Landing'

test('renders learn react link', () => {
  const { getByText } = render(<Landing />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
