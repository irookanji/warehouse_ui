import React, { useState } from 'react'
import { CardActions, CardContent, Typography } from '@mui/material'
import { StyledCard, ItemContainer, DeleteButton, SaleButton, LoaderContainer } from './styles'
import { patchBulkArticles, postSale } from '../../api/requests'
import { Article } from '../../types'
import LinearProgress from '@mui/material/LinearProgress'

interface IProps {
  productsInCart: { id: string; name: string; amount: number; articles: Article[] }[]
  deleteProductFromCart: (name: string) => void
  clearCartAndGetAllProductsFromAPI: () => void
  getSnackBarMessage: (message: string) => void
}

const Cart: React.FC<IProps> = ({
  productsInCart,
  deleteProductFromCart,
  clearCartAndGetAllProductsFromAPI,
  getSnackBarMessage,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const deleteProduct = (name: string) => {
    deleteProductFromCart(name)
  }

  const prepareDataForAPIRequest = () => {
    const saleData = []
    // Iterate and collect necessary data about Articles and get Array of Arrays
    for (let i = 0; i < productsInCart.length; i++) {
      const articlesInfo = productsInCart[i].articles.map((article: Article) => {
        return {
          id: article.id,
          amountToSubtract: article.amountRequired * productsInCart[i].amount,
        }
      })
      saleData.push(articlesInfo)
    }
    const articlesFromCart = saleData.flat()
    // Get array of unique Ids of Articles
    const unique = Array.from(new Set(articlesFromCart.map((item) => item.id)))
    // Create a new Array of Objects with unique Ids and amountToSubtract with 0 value as an Accumulator
    const uniqueArticles = unique.map((item) => {
      return { id: item, amountToSubtract: 0 }
    })
    // Iterate in the not unique Array and in unique Array to compare Ids of Articles and If Ids are equal then we collect amountToSubtract to uniqueArticles
    for (let i = 0; i < articlesFromCart.length; i++) {
      for (let j = 0; j < uniqueArticles.length; j++) {
        if (articlesFromCart[i].id === uniqueArticles[j].id) {
          uniqueArticles[j].amountToSubtract += articlesFromCart[i].amountToSubtract
        }
      }
    }
    return uniqueArticles
  }

  const registerSale = () => {
    setIsLoading(true)

    patchBulkArticles(prepareDataForAPIRequest())
      .then(() => {
        setIsLoading(false)
        // Prepare data for postSale
        const productsArray = productsInCart.map((item) => {
          return { productId: item.id, amountSold: item.amount }
        })
        productsArray.forEach((item) => {
          postSale(item)
        })
        getSnackBarMessage('✅ Congrats! The sale was registered')
        clearCartAndGetAllProductsFromAPI()
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
        getSnackBarMessage(`❌ ${error.response.data.message}`)
      })
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography variant='h5' component='div'>
          ITEMS TO SALE
        </Typography>

        {productsInCart.map((item: any) => (
          <ItemContainer key={item.name}>
            <Typography color='text.secondary'>
              {item.name}: {item.amount} <br />
            </Typography>

            <DeleteButton onClick={() => deleteProduct(item.name)} />
          </ItemContainer>
        ))}

        <Typography variant='body2'>Complete your purchase</Typography>
      </CardContent>

      <CardActions>
        <SaleButton
          disabled={productsInCart.length === 0 ? true : false}
          variant='contained'
          size='small'
          onClick={registerSale}
        >
          REGISTER SALE
        </SaleButton>
      </CardActions>

      {isLoading ? (
        <LoaderContainer>
          <LinearProgress />
        </LoaderContainer>
      ) : null}
    </StyledCard>
  )
}

export default Cart
