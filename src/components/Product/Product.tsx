import * as React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Counter from '../Counter/Counter'
import { StyledAccordeon, StyledCounter, AmountInStock } from './styles'
import { Article } from '../../types'

interface IProps {
  id: string
  name: string
  articles: Article[]
  amountInStock?: number
  addProductsToCart: (id: string, name: string, amount: number, articles: Article[]) => void
}

const Product: React.FC<IProps> = ({ id, name, articles, amountInStock, addProductsToCart }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const addProduct = (amount: number) => {
    addProductsToCart(id, name, amount, articles)
  }

  return (
    <StyledAccordeon>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography>{name}</Typography>
          <Typography sx={{ ml: '3rem' }}>
            In stock: <AmountInStock>{amountInStock}</AmountInStock>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <AmountInStock>Articles in stock:</AmountInStock>
          {articles.map((item) => (
            <Typography key={item.id}>
              {item.name}: {item.amountInStock}
            </Typography>
          ))}
        </AccordionDetails>

        <StyledCounter>
          <Counter addProduct={addProduct} />
        </StyledCounter>
      </Accordion>
    </StyledAccordeon>
  )
}

export default Product
