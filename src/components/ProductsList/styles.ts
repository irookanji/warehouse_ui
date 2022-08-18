import styled from 'styled-components'
import Skeleton from '@mui/material/Skeleton'

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background-color: #e7ebf0;

  @media (max-width: 850px) {
    max-width: 350px;
    margin-bottom: 1rem;
  }
`

export const StyledSkeleton = styled(Skeleton)`
  max-width: 90%;
  max-height: 90%;
`
