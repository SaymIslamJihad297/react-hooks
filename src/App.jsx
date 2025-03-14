import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import { countContext } from './context/countContext'

function App() {
  let countN = useRef(0);
  const [count, setCount] = useState(0)

  useEffect(() => {
    countN.current = countN.current + 1;
    console.log(`countN = ${countN.current}`);
  })

  return (
    <>
      <countContext.Provider value={{ count, setCount }}>
        <div>
          <Button />
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </countContext.Provider>
    </>
  )
}

export default App
