import React from 'react'
import Dialog from '@mui/material/Dialog'
import { Close } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import './styles.css'
const JoinClass = (props) => {
  const { joinClassDialog, setJoinClassDialog } = props
  // const classes = useStyles()
  return (
    <Dialog
      fullScreen
      open={joinClassDialog}
      onClose={() => setJoinClassDialog(false)}
    >
      <div className="joinClass">
        <div className="joinClass_wrapper">
          <div
            className="joinClass_wrapper2"
            onClick={() => setJoinClassDialog(false)}
          >
            <Close className="joinClassIconClose " />
          </div>
          <div className="topHead">Join class</div>
          <Button className="joinClassBtn" variant="contained" color="primary">
            Join
          </Button>
        </div>

        <div className="joinClass_form">
          <div
            style={{ fontSize: '1.25rem', color: '#3c4043' }}
            className="formText"
          >
            Class code
          </div>
          <div className="logInfo">
            <TextField
              id="outlined-basic"
              label="class-code"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Owner email"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default JoinClass
