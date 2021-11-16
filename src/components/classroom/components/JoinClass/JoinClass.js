import React, { forwardRef } from 'react'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import { useStyles } from './styles'
import { Close } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const JoinClass = (props) => {
  const { joinClassDialog, setJoinClassDialog } = props
  const classes = useStyles()
  return (
    <Dialog
      fullScreen
      open={joinClassDialog}
      onClose={() => setJoinClassDialog(false)}
      TransitionComponent={Transition}
    >
      <div className={classes.joinClass}>
        <div className={classes.joinClass_wrapper}>
          <div
            className={classes.joinClass_wrapper2}
            onClick={() => setJoinClassDialog(false)}
          >
            <Close className={classes.joinClassIconClose} />
            <div className={classes.topHead}>Join class</div>
          </div>
          <Button
            className={classes.joinClassBtn}
            variant="contained"
            color="primary"
          >
            Join
          </Button>
        </div>
        <div className={classes.joinClass_form}>
          <div
            style={{ fontSize: '1.25rem', color: '#3c4043' }}
            className={classes.formText}
          >
            Class code
          </div>
          <div className={classes.logInfo}>
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
