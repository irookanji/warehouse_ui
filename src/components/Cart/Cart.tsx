import React, { useState } from 'react'
import { CardActions, CardContent, Typography } from '@mui/material'
import { StyledCard, ItemContainer, DeleteButton, SaleButton, LoaderContainer } from './styles'
import { patchBulkArticles, postSale } from '../../api/requests'
import { Article } from '../../types'
import LinearProgress from '@mui/material/LinearProgress'

interface IProps {
  productsInCart: { id: string; name: string; amount: number; articles: Article[] }[]
  deleteProductFromCart: (name: string) => void
  clearCartAfterRegisterSale: () => void
  getSnackBarMessage: (message: string) => void
}

const Cart: React.FC<IProps> = ({
  productsInCart,
  deleteProductFromCart,
  clearCartAfterRegisterSale,
  getSnackBarMessage,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const deleteProduct = (name: string) => {
    deleteProductFromCart(name)
    console.log('Deleting:', name)
  }

  const registerSale = () => {
    setIsLoading(true)
    const saleData = []
    for (let i = 0; i < productsInCart.length; i++) {
      const articlesInfo = productsInCart[i].articles.map((article: Article) => {
        return {
          id: article.id,
          amountToSubtract: article.amountRequired * productsInCart[i].amount,
        }
      })
      saleData.push(articlesInfo)
    }
    console.log('Sale:', saleData.flat())

    const flatedSaleData = saleData.flat()
    const unique = Array.from(new Set(flatedSaleData.map((item) => item.id)))
    console.log(unique)
    const uniqueArrObj = unique.map((item) => {
      return { id: item, amountToSubtract: 0 }
    })
    console.log(uniqueArrObj)
    for (let i = 0; i < flatedSaleData.length; i++) {
      for (let j = 0; j < uniqueArrObj.length; j++) {
        if (flatedSaleData[i].id === uniqueArrObj[j].id) {
          uniqueArrObj[j].amountToSubtract += flatedSaleData[i].amountToSubtract
        }
      }
    }
    console.log('Unique Array Objects', uniqueArrObj)

    patchBulkArticles(uniqueArrObj)
      .then(() => {
        setIsLoading(false)
        const productsArray = productsInCart.map((item) => {
          return { productId: item.id, amountSold: item.amount }
        })
        productsArray.forEach((item) => {
          console.log('Products Array', item)
          postSale(item)
        })
        getSnackBarMessage('✅ Congrats! The sale was registered')
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
        getSnackBarMessage('❌ Not enough articles in stock. Please reduce the number of products.')
      })

    console.table(productsInCart)

    clearCartAfterRegisterSale()
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
