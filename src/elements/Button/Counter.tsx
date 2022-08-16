import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  const IncNum = () => {
    setCount(count + 1)
  }
  const DecNum = () => {
    if (count > 0) setCount(count - 1)
    else {
      setCount(0)
      alert('min limit reached')
      //   setOpenSnackBar(true)
    }
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
      </div>
    </>
  )
}

export default Counter
