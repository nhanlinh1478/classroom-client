import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles(() => {
  return {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      color: 'black',
    },
    title: {
      fontSize: '1.38rem',
      color: '#5f6368',
      marginLeft: '5px',
      cursor: 'pointer',
    },
    appBar: {
      backgroundColor: 'white',
      color: 'black',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    header_wrapper_right: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      marginRight: '15px',
      color: '#5f6368',
      cursor: 'pointer',
    },
  }
})
