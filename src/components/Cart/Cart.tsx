import * as React from 'react'
import { CardActions, CardContent, Button, Typography } from '@mui/material'
import { StyledCard, ItemContainer, DeleteButton } from './styles'

const Cart: React.FC = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant='h5' component='div'>
          Items to sale
        </Typography>

        <ItemContainer>
          <Typography color='text.secondary'>
            Dining Chairs: 2 <br />
          </Typography>
          <DeleteButton />
        </ItemContainer>

        <ItemContainer>
          <Typography color='text.secondary'>
            Beds: 4 <br />
          </Typography>
          <DeleteButton />
        </ItemContainer>

        <Typography variant='body2'>Complete your purchase</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY</Button>
      </CardActions>
    </StyledCard>
  )
}

export default Cart
