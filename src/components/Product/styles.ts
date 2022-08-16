import styled from 'styled-components'

export const StyledAccordeon = styled.div`
  width: 500px;
  border: 1px solid black;
  margin: 0.1rem 0;

  @media (max-width: 850px) {
    width: 300px;
  }
`

export const StyledCounter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 3rem 2rem 0;
`
