import styled from 'styled-components'
import { Box, Card } from '@mui/material'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

export const StyledCard = styled(Card)`
  min-width: 275px;
  max-width: 500px;
  height: 250px;
  max-height: 600px;
`
export const ItemContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`
export const DeleteButton = styled(DeleteForeverOutlinedIcon)`
  color: red;
  cursor: pointer;
`
