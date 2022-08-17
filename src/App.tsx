import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductsList from './components/ProductsList/ProductsList'
import Cart from './components/Cart/Cart'
import { getAllArticles, getAllProducts } from './api/requests'
import { Product, Article } from './types'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ;(async () => {
      const products = await getAllProducts()
      setProducts(products)
      const articles = await getAllArticles()

      const copyProducts = JSON.parse(JSON.stringify(products))
      const copyArticles = JSON.parse(JSON.stringify(articles))

      for (let i = 0; i < copyProducts.length; i++) {
        const updatedArticlesInProducts = copyProducts[i].articles.map((item: Article) => {
          const foundArticle = copyArticles.find((article: Article) => article.id === item.id)
          return { ...item, name: foundArticle?.name, amountInStock: foundArticle?.amountInStock }
        })
        copyProducts[i].articles = updatedArticlesInProducts
      }
      setProducts(copyProducts)
    })()
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <ProductsList products={products} />
        <Cart />
      </div>
    </div>
  )
}

export default App
