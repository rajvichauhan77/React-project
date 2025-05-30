import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Cartproduct from './components/Cartproduct'
import { showCart } from './Features/cartSlice'
import { useSelector } from 'react-redux'
import { store } from './Store/store'


function App() {
  const [count, setCount] = useState(0)

  
  //   let auth = useSelector(state=> state.auth.auth)
  // let cart = useSelector(state=> state.cart.cartList)
  // let showCart = useSelector(state=> state.cart.showCart)
  
  // console.log(auth)
  // console.log(cart)

  
  return (
    <>

      <Navbar/>
      <Cart/>
      <Cartproduct/>

      {/* { auth &&  <Navbar/>} */}
    {/* { !auth &&  <Login/>} */}
    {/* { auth &&  <Products/>} */}

      { showCart && <Cart/>}

      
    </>
  )
}

export default App
