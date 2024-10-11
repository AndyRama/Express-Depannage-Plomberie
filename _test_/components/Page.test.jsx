import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Page component', () => {
  test('renders an h1 with the text Home', () => { 
    render(<Home />) 
  
    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toHaveTextContent('Home')
  })
})

