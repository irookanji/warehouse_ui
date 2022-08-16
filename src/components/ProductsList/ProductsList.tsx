import React from 'react'
import Product from '../Product/Product'
import { ProductsListContainer } from './styles'

const ProductsList: React.FC = () => {
  return (
    <ProductsListContainer>
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductsListContainer>
  )
}

export default ProductsList
