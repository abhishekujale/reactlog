import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogSin from './components/LogSin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<LogSin></LogSin>
    </div>
  )
}

export default App
