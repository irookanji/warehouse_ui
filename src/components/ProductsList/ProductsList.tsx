import React from 'react'
import Product from '../Product/Product'
import { ProductsListContainer, StyledSkeleton } from './styles'
import { Product as ProductType, Article } from '../../types'

interface IProps {
  products: ProductType[]
  isLoading: boolean
  addProductsToCart: (id: string, name: string, amount: number, articles: Article[]) => void
}

const ProductsList: React.FC<IProps> = ({ products, isLoading, addProductsToCart }) => {
  return (
    <ProductsListContainer>
      {isLoading ? (
        <StyledSkeleton variant='rectangular' width={500} height={200} />
      ) : (
        products.map((item) => (
          <Product
            id={item.id}
            key={item.id}
            name={item.name}
            articles={item.articles}
            amountInStock={item.amountInStock}
            addProductsToCart={addProductsToCart}
          />
        ))
      )}
    </ProductsListContainer>
  )
}

export default ProductsList
