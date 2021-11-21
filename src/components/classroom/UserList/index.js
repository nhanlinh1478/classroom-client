import React, { useEffect, useState } from 'react'
import axiosClient from 'src/axiosClient'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import {
  Grid,
  Typography,
  Container,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import { AddSharp, ArrowBackIosNew } from '@mui/icons-material'
import partition from 'lodash/partition'
import ListUsers from './List/ListUsers'
import InviteModal from './InviteModal'
import Layout from '../../Layout'
import styled from '@emotion/styled'

const Header = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0 6px 4px -4px rgb(0 0 0 / 20%);
`

const UserList = () => {
  const [users, setUsers] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [openInviteModal, setOpenInviteModal] = useState(false)
  const [role, setRole] = useState('')
  const { id } = useParams()

  const history = useHistory()

  useEffect(() => {
    const fetchUserClassrooms = async () => {
      try {
        const response = await axiosClient.get(`/api/classrooms/${id}/users`)
        setUsers(response.data)
      } catch (error) {
        setErrorMsg(error.response.data.message)
      }
    }

    fetchUserClassrooms()
  }, [])
  const [students, teachers] = partition(users, (u) => u.role === 'STUDENT')

  const handleCloseInviteModal = () => {
    setOpenInviteModal(false)
  }

  const handleOpenInviteModal = (role) => {
    setRole(role)
    setOpenInviteModal(true)
  }

  const goBack = () => {
    history.goBack()
  }

  const addNewUser = (newUser) => {
    setUsers((prevState) => [...prevState, newUser])
  }

  const renderTeachersList = () => {
    return (
      <Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
            Teacher
          </Typography>
          <Button onClick={() => handleOpenInviteModal('TEACHER')}>
            Invite TEACHER <AddSharp />
          </Button>
        </Box>

        <InviteModal
          open={openInviteModal}
          handleClose={handleCloseInviteModal}
          classroomId={id}
          role={role}
          addNewUser={addNewUser}
        />
        <ListUsers users={teachers} />
      </Grid>
    )
  }

  const renderStudentsList = () => {
    return (
      <Grid sx={{ flexGrow: 1, maxWidth: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
            Student
          </Typography>
          <Button onClick={() => handleOpenInviteModal('STUDENT')}>
            Invite STUDENT <AddSharp />
          </Button>
        </Box>

        <InviteModal
          open={openInviteModal}
          handleClose={handleCloseInviteModal}
          classroomId={id}
          role={role}
          addNewUser={addNewUser}
        />
        <ListUsers users={students} />
      </Grid>
    )
  }
  return (
    <>
      <Layout />
      {errorMsg ? (
        <Redirect to="/" />
      ) : (
        <Container maxWidth="lg" spacing={2}>
          <Header>
            <IconButton onClick={goBack}>
              <ArrowBackIosNew />
            </IconButton>
            <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
              List Users
            </Typography>
          </Header>
          {renderTeachersList()}
          {renderStudentsList()}
        </Container>
      )}
    </>
  )
}

export default UserList
