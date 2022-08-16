import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductsList from './components/ProductsList/ProductsList'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <ProductsList />
        <Cart />
      </div>
      
    </div>
  )
}

export default App
