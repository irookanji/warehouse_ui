import * as React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CustomButton from '../../elements/Button/Button'
import Counter from '../../elements/Button/Counter'
import { StyledAccordeon, StyledCounter, StyledButtonContainer } from './styles'
import { Article } from '../../types'

interface IProps {
  name: string
  articles: Article[]
  amountInStock?: number
}

const Product: React.FC<IProps> = ({ name, articles, amountInStock }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
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
          <Typography sx={{ ml: '3rem' }}>In stock: {amountInStock}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {articles.map((item) => (
            <Typography key={item.id}>
              {item.name}: {item.amountInStock}
            </Typography>
          ))}
        </AccordionDetails>

        <StyledCounter>
          <Counter />
        </StyledCounter>

        <StyledButtonContainer>
          <CustomButton />
        </StyledButtonContainer>
      </Accordion>
    </StyledAccordeon>
  )
}

export default Product
