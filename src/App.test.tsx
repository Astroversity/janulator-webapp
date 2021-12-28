import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

jest.mock('./calculate')
import calculate from './calculate'
import { mocked } from 'jest-mock'

test('type into an input field', async () => {
  mocked(calculate).mockImplementation(async(equation) => {
    expect(equation).toBe('1+1')
    return 'w'
  })
  render(<App />)
  const equationField = screen.getByTestId('equation-field')
  userEvent.type(equationField, '1+1')
  expect(equationField).toHaveValue('1+1')

  const button = screen.getByTestId('calculate-button')
  userEvent.click(button)

  const resultElement = screen.getByTestId('result')
  await waitFor(() => expect(resultElement).toHaveTextContent('w'))
})
