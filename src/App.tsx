import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductsList from './components/ProductsList/ProductsList'
import Cart from './components/Cart/Cart'
import { Product, Article } from './types'
import { getAllProductsFromAPI } from './utils/processDataFromAPI'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [productsInCart, setProductsInCart] = useState<
    { id: string; name: string; amount: number; articles: Article[] }[]
  >([])

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const productsFromAPI = await getAllProductsFromAPI()
      setProducts(productsFromAPI)
      setIsLoading(false)
    })()
  }, [])

  const addProductsToCart = (id: string, name: string, amount: number, articles: Article[]) => {
    setProductsInCart([...productsInCart, { id, name, amount, articles }])
  }

  const deleteProductFromCart = (name: string) => {
    setProductsInCart((products) => products.filter((product) => product.name !== name))
  }

  const clearCartAfterRegisterSale = () => {
    setProductsInCart([])
  }

  return (
    <div className='App'>
      <Navbar />

      <div className='container'>
        <ProductsList
          products={products}
          isLoading={isLoading}
          addProductsToCart={addProductsToCart}
        />
        <Cart
          productsInCart={productsInCart}
          deleteProductFromCart={deleteProductFromCart}
          clearCartAfterRegisterSale={clearCartAfterRegisterSale}
        />
      </div>
    </div>
  )
}

export default App
