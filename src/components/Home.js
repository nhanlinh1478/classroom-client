import React, { useState, useEffect } from 'react'
import axiosClient from '../axiosClient'
import ClassroomCard from './classroom/ClassroomCard'
import { Button, Grid } from '@mui/material'
import AddClassroomModal from './classroom/AddClassroomModal'

const Home = () => {
  const [classrooms, setClassrooms] = useState([])
  const [open, setOpen] = useState(false)
  const toggleModal = () => {
    setOpen((prevState) => !prevState)
  }

  useEffect(() => {
    async function fetchAPI() {
      const result = await axiosClient.get('/api/classrooms')
      if (result) {
        setClassrooms(result.data)
      }
    }

    fetchAPI()
  }, [])

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleModal}
        sx={{ display: 'block' }}
      >
        Add New Class
      </Button>
      <Grid container sx={{ alignItems: 'center' }}>
        {classrooms.map((classroom) => (
          <ClassroomCard key={classroom.id} classroom={classroom} />
        ))}
      </Grid>
      <AddClassroomModal open={open} toggle={toggleModal} />
    </div>
  )
}

export default Home
