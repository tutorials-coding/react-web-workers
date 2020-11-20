import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import { useWebworker } from './hooks/useWebworker'
import { useFibonacci } from './hooks/useFibonacci'

export default function App() {
  const [value, setValue] = useState(null)
  // const { result, error, run } = useWebworker((k) => k + 1)
  const { result, error, run } = useFibonacci()

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  const getNthFibonacciNumber = () => {
    run(value)
  }

  return (
    <div className="main-container">
      <div className="controls-container">
        <FormControl
          placeholder="Value"
          aria-label="Value"
          onChange={handleValueChange}
        />
        <Button variant="primary" onClick={getNthFibonacciNumber}>
          Run
        </Button>
      </div>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <p className="result">{result}</p>
      )}
    </div>
  )
}
