import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background-color: #e7ebf0;

  @media (max-width: 850px) {
    max-width: 350px;
  }
`
