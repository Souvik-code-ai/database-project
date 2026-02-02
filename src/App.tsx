import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Homepage from './Homepage'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Homepage/>
      
    </>
  )
}

export default App
