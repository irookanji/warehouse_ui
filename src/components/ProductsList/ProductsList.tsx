import React from 'react'
import Product from '../Product/Product'
import { ProductsListContainer } from './styles'
import { Product as ProductType } from '../../types'

interface IProps {
  products: ProductType[]
}

const ProductsList: React.FC<IProps> = ({ products }) => {
  return (
    <ProductsListContainer>
      {products.map((item) => (
        <Product key={item.id} name={item.name} articles={item.articles} />
      ))}
    </ProductsListContainer>
  )
}

export default ProductsList
