import styled from 'styled-components'
import { Box, Card, Button } from '@mui/material'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

export const StyledCard = styled(Card)`
  min-width: 275px;
  max-width: 500px;
  /* min-height: 250px; */
  position: relative;
  max-height: 307px;
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
  color: #ee4444;
  cursor: pointer;
`
export const SaleButton = styled(Button)`
  left: 25%;
  margin-bottom: 1rem;
`
