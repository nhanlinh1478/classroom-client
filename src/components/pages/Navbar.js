import * as React from 'react'
import { Add, Logout } from '@mui/icons-material'
import {
  Tooltip,
  Avatar,
  MenuItem,
  ListItemIcon,
  Menu,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '../Drawer/Drawer'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
})
export default function ButtonAppBar() {
  const classes = useStyles()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const logout = () => {
    localStorage.clear()
    history.push('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Drawer>
            <MenuIcon />
          </Drawer>
          <div className={classes.headerWrapper}>
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
          </div>
          <Tooltip title="create or join class">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Add className={classes.header_wrapper_right} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>

          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  )
}
