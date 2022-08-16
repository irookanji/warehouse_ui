import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CustomButton from '../../elements/Button/Button'
import Counter from '../../elements/Button/Counter'
import { StyledAccordeon, StyledCounter, StyledButtonContainer } from './styles'

const Product: React.FC = () => {
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
          <Typography>Dining Chairs</Typography>
          <Typography sx={{ ml: '3rem' }}>in stock: 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Seat: 4</Typography>
          <Typography>Leg: 16</Typography>
          <Typography>Back: 3</Typography>
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
