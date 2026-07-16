import { useState } from 'react'
import './App.css'

/* pipeline test */

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Counter</h1>
      <p className="value">{count}</p>
      <div className="actions">
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          −
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </main>
  )
}

export default App
