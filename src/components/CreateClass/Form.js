import { Button, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'
const useStyles = makeStyles(() => {
  return {
    textField: {
      marginTop: '15px',
    },
    btnCreate: {
      marginTop: '15px',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '155px',
      marginBottom: '15px',
    },
    root: {
      marginTop: '15px',
    },
  }
})
const Form = () => {
  const classes = useStyles()
  const [className, setClassName] = useState('')
  const [section, setSection] = useState('')
  const [subject, setSubject] = useState('')
  const [room, setRoom] = useState('')
  const [classNameErr, setClassNameErr] = useState(false)
  const [sectionErr, setSectionErr] = useState(false)
  const [subjectErr, setSubjectErr] = useState(false)
  const [roomErr, setRoomErr] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setClassNameErr(false)
    setSectionErr(false)
    setSubjectErr(false)
    setRoomErr(false)
    if (className === '') {
      setClassNameErr(true)
    }
    if (section === '') {
      setSectionErr(true)
    }
    if (subject === '') {
      setSubjectErr(true)
    }
    if (room === '') {
      setRoomErr(true)
    }
    if (className && section && subject && room) {
      console.log(className)
      console.log(section)
      console.log(subject)
      console.log(room)
    }
  }

  return (
    <div>
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        className={classes.root}
      >
        Create Classroom
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          onChange={(e) => setClassName(e.target.value)}
          label="ClassName"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={classNameErr}
        />
        <TextField
          onChange={(e) => setSection(e.target.value)}
          label="Section"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.textField}
          error={sectionErr}
        ></TextField>
        <TextField
          onChange={(e) => setSubject(e.target.value)}
          label="Subject"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={subjectErr}
          className={classes.textField}
        ></TextField>
        <TextField
          onChange={(e) => setRoom(e.target.value)}
          label="Room"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={roomErr}
          className={classes.textField}
        ></TextField>
        <Button
          className={classes.btnCreate}
          color="secondary"
          variant="outlined"
          type="submit"
          align="center"
          component={Link}
          to="/"
          // onClick={handleSubmit}
        >
          Create class
        </Button>
      </form>
    </div>
  )
}

export default Form
