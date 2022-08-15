import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Product = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ width: '500px' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography>Dining Chair</Typography>
          <Typography sx={{ ml: '2rem' }}>3 units</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Seat: 4</Typography>
          <Typography>Leg: 8</Typography>
          <Typography>Back: 1</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Product
