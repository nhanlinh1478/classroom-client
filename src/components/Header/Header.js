import { AppBar, Menu, MenuItem, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import { Add, Apps } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useState } from 'react'
import CreateClass from '../classroom/components/CreateClass/CreateClass'
import JoinClass from '../classroom/components/JoinClass/JoinClass'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { IconButton } from '@mui/material'

const HeaderWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
})
const HeaderWrapperRight = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const MyAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  color: 'black',
})
const MyAvatar = styled(Avatar)({
  marginRight: '15px',
  color: '#5f656d',
  cursor: 'pointer',
})
const MyApps = styled(Apps)({
  marginRight: '15px',
  color: '#5f656d',
  cursor: 'pointer',
})
const MyAdd = styled(Add)({
  marginRight: '15px',
  color: '#5f656d',
  cursor: 'pointer',
})
const Header = ({ children }) => {
  //const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()
  const [anchorElClassroom, setAnchorElClassroom] = useState(null)
  const [anchorElProfile, setAnchorElProfile] = useState(null)
  const handleClick = (event) => {
    setAnchorElClassroom(event.currentTarget)
  }
  const handleCloseClassroomMenu = () => {
    setAnchorElClassroom(null)
  }
  const handleCloseProfileMenu = () => {
    setAnchorElProfile(null)
  }
  const handleMenuProfile = (event) => {
    setAnchorElProfile(event.currentTarget)
  }
  const [createClassDialog, setCreateClassDialog] = useState(false)
  const [joinClassDialog, setJoinClassDialog] = useState(false)
  const handleCreate = () => {
    handleCloseClassroomMenu()
    setCreateClassDialog(true)
  }
  const handleJoin = () => {
    handleCloseClassroomMenu()
    setJoinClassDialog(true)
  }
  const handleLogout = () => {
    localStorage.clear()
    history.push('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HeaderWrapper>
            {children}
            <img
              src="http://www.fit.hcmus.edu.vn/cdio/images/cdio.gif"
              alt="Classroom"
              sx={{ marginTop: '20px' }}
            />
            <Typography variant="h6">Classroom</Typography>
          </HeaderWrapper>
          <HeaderWrapperRight>
            <MyAdd onClick={handleClick} />
            <MyApps />
            <Menu
              id="simple-menu"
              anchorEl={anchorElClassroom}
              keepMounted
              open={Boolean(anchorElClassroom)}
              onClose={handleCloseClassroomMenu}
            >
              <MenuItem onClick={handleJoin}>Join class</MenuItem>
              <MenuItem onClick={handleCreate}>Create class</MenuItem>
            </Menu>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuProfile}
                color="inherit"
              >
                <MyAvatar />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElProfile}
                keepMounted
                open={Boolean(anchorElProfile)}
                onClose={handleCloseProfileMenu}
              >
                <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </div>
          </HeaderWrapperRight>
        </Toolbar>
      </MyAppBar>
      <CreateClass
        createClassDialog={createClassDialog}
        setCreateClassDialog={setCreateClassDialog}
      />
      <JoinClass
        joinClassDialog={joinClassDialog}
        setJoinClassDialog={setJoinClassDialog}
      />
    </Box>
  )
}

export default Header
