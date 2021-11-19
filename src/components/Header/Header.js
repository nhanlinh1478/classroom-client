import { AppBar, Menu, MenuItem, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import { Add, Apps } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useState } from 'react'
import CreateClass from '../classroom/components/CreateClass/CreateClass'
import JoinClass from '../classroom/components/JoinClass/JoinClass'
import styled from '@emotion/styled'
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
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [createClassDialog, setCreateClassDialog] = useState(false)
  const [joinClassDialog, setJoinClassDialog] = useState(false)
  const handleCreate = () => {
    handleClose()
    setCreateClassDialog(true)
  }
  const handleJoin = () => {
    handleClose()
    setJoinClassDialog(true)
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
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Typography variant="h6">Classroom</Typography>
          </HeaderWrapper>
          <HeaderWrapperRight>
            <MyAdd onClick={handleClick} />
            <MyApps />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Join class</MenuItem>
              <MenuItem onClick={handleCreate}>Create class</MenuItem>
            </Menu>
            <MyAvatar />
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
