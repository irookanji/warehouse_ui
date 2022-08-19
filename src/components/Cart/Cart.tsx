import * as React from 'react'
import { CardActions, CardContent, Typography } from '@mui/material'
import { StyledCard, ItemContainer, DeleteButton, SaleButton } from './styles'

interface IProps {
  productsToBeAdded: { name: string; amount: number }[]
}

const Cart: React.FC<IProps> = ({ productsToBeAdded }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant='h5' component='div'>
          ITEMS TO SALE
        </Typography>

        {productsToBeAdded.map((item: any) => (
          <ItemContainer key={item.name}>
            <Typography color='text.secondary'>
              {item.name}: {item.amount} <br />
            </Typography>
            <DeleteButton />
          </ItemContainer>
        ))}

        <Typography variant='body2'>Complete your purchase</Typography>
      </CardContent>
      <CardActions>
        <SaleButton size='small'>SALE</SaleButton>
      </CardActions>
    </StyledCard>
  )
}

export default Cart
