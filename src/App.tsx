import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductsList from './components/ProductsList/ProductsList'
import Cart from './components/Cart/Cart'
import { Product, Article } from './types'
import { getAllProductsFromAPI } from './utils/processDataFromAPI'
import InfoMessage from './elements/InfoMessage/InfoMessage'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [productsInCart, setProductsInCart] = useState<
    { id: string; name: string; amount: number; articles: Article[] }[]
  >([])
  const [snackBarMessage, setSnackBarMessage] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const productsFromAPI = await getAllProductsFromAPI()
      setProducts(productsFromAPI)
      setIsLoading(false)
    })()
  }, [])

  const addProductsToCart = (id: string, name: string, amount: number, articles: Article[]) => {
    const uniqueProducts = Array.from(
      new Map(
        [...productsInCart, { id, name, amount, articles }].map((item) => [item['name'], item]),
      ).values(),
    )

    setProductsInCart(uniqueProducts)
  }

  const deleteProductFromCart = (name: string) => {
    setProductsInCart((products) => products.filter((product) => product.name !== name))
  }

  const clearCartAfterRegisterSale = () => {
    setProductsInCart([])
    ;(async () => {
      const productsFromAPI = await getAllProductsFromAPI()
      setProducts(productsFromAPI)
    })()
  }

  const getSnackBarMessage = (message: string) => {
    setSnackBarMessage(message)
  }

  const handleCloseSnackBarMessage = () => {
    setSnackBarMessage(null)
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
          getSnackBarMessage={getSnackBarMessage}
        />
        <InfoMessage
          snackBarMessage={snackBarMessage}
          handleCloseSnackBarMessage={handleCloseSnackBarMessage}
        />
      </div>
    </div>
  )
}

export default App
