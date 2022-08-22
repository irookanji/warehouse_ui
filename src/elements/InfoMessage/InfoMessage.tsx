import React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

interface IProps {
  snackBarMessage: string | null
  handleCloseSnackBarMessage: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const InfoMessage: React.FC<IProps> = ({ snackBarMessage, handleCloseSnackBarMessage }) => {
  return (
    <div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={typeof snackBarMessage === 'string'}
          autoHideDuration={6000}
          onClose={handleCloseSnackBarMessage}
        >
          <Alert onClose={handleCloseSnackBarMessage} severity='info' sx={{ width: '100%' }}>
            {snackBarMessage}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}

export default InfoMessage
