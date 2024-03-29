import { useState } from 'react'
import calculate from './calculate'

export default function App() {
  const [equation, setEquation] = useState('1+1')
  const [result, setResult] = useState('')
  return (
    <>
      <input
        data-testid="equation-field"
        onChange={(e) => setEquation(e.target.value)}
      />
      <button
        data-testid="calculate-button"
        onClick={async () => {
          const result = await calculate(equation)
          setResult(result)
        }}
      >
        send
      </button>
      <span data-testid="result">{result}</span>
    </>
  )
}
