import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Tooltip, Button } from '@mui/material'
import { StyledButtonContainer } from './styles'

interface IProps {
  addProduct: (amount: number) => void
}

const Counter: React.FC<IProps> = ({ addProduct }) => {
  const [count, setCount] = useState(0)
  const IncNum = () => {
    setCount(count + 1)
  }
  const DecNum = () => {
    if (count > 0) setCount(count - 1)
    else {
      setCount(0)
    }
  }

  const countProduct = () => {
    addProduct(count)
  }

  return (
    <>
      <div>
        <div>
          <h1>{count}</h1>
          <div>
            <Tooltip title='Delete'>
              <Button onClick={DecNum}>
                <RemoveIcon />
              </Button>
            </Tooltip>

            <Button onClick={IncNum}>
              <AddIcon />
            </Button>
          </div>
        </div>

        <StyledButtonContainer>
          <Button disabled={count === 0 ? true : false} variant='contained' onClick={countProduct}>
            ADD
          </Button>
        </StyledButtonContainer>
      </div>
    </>
  )
}

export default Counter
