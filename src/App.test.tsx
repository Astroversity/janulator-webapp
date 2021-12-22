import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('type into an input field', () => {
  render(<App />)
  const element = screen.getByTestId('equation-field')
  userEvent.type(element, '1+1')
  expect(element).toHaveValue('1+1')

  const button = screen.getByTestId('calculate-button')
  userEvent.click(button)

  const resultElement = screen.getByTestId('result')
  expect(resultElement).toHaveTextContent('w')
})
