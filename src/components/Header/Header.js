import { AppBar, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'
import { Add, Apps } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useState } from 'react'
import CreateClass from '../CreateClass/CreateClass'
import { useLocalContext } from '../../context/context'
import JoinClass from '../JoinClass/JoinClass'
const Header = ({ children }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    console.log(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { setCreateClassDialog, setJoinClassDialog } = useLocalContext()
  const handleCreate = () => {
    handleClose()
    setCreateClassDialog(true)
  }
  const handleJoin = () => {
    handleClose()
    setJoinClassDialog(true)
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
          </div>
          <div className={classes.header_wrapper_right}>
            <Add className={classes.icon} onClick={handleClick} />
            <Apps className={classes.icon} />
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
            <div>
              <Avatar className={classes.icon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  )
}

export default Header
