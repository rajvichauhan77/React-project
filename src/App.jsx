import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <Cart/>
      <Navbar/>
    </>
  )
}

export default App
