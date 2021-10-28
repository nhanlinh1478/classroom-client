import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Modal, Grid, TextField } from '@mui/material/'
import axiosClient from '../../axiosClient'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function AddClassroomModal({ open, toggle }) {
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event.target)
    const data = new FormData(event.currentTarget)
    const response = await axiosClient.post('/api/classrooms', {
      name: data.get('name')
    })
    console.log(response)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          sx={style}
          container
          onSubmit={handleSubmit}
          component="form"
          justifyContent="right"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Class Name"
            name="name"
            autoFocus
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Create
          </Button>
        </Grid>
      </Modal>
    </div>
  )
}
