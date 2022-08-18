import React from 'react'
import Product from '../Product/Product'
import { ProductsListContainer, StyledSkeleton } from './styles'
import { Product as ProductType } from '../../types'

interface IProps {
  products: ProductType[]
  isLoading: boolean
}

const ProductsList: React.FC<IProps> = ({ products, isLoading }) => {
  return (
    <ProductsListContainer>
      {isLoading ? (
        <StyledSkeleton variant='rectangular' width={500} height={200} />
      ) : (
        products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            articles={item.articles}
            amountInStock={item.amountInStock}
          />
        ))
      )}
    </ProductsListContainer>
  )
}

export default ProductsList
