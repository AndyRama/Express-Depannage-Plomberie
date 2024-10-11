import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../../app/components/Navigation'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Navigation component', () => {
  test('renders an h1 with the text Navigation', () => { 
    render(<Navigation />) 
  
    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toHaveTextContent('Navigation')
  })

  // New test case to check navigation links
  test('renders navigation links and opens/closes menu', () => {
    render(<Navigation />)

    // Check if navigation links are rendered
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(6)

    // Check if the menu button is present
    const menuButton = screen.getByRole('button', { name: /open menu/i }) // Update this line if you changed the aria-label
    expect(menuButton).toBeInTheDocument()

    // Simulate opening the menu
    fireEvent.click(menuButton)
    const menuItems = screen.getAllByRole('listitem')
    expect(menuItems.length).toBe(4) // Check if the menu items are displayed

    // Simulate closing the menu
    fireEvent.click(screen.getByRole('button', { name: /close panel/i }))
    expect(menuItems.length).toBe(0) // Menu items should not be visible
  })
})