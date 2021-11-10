import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles(() => {
  return {
    join_class: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
      letterSpacing: '0.2px',
      lineHeight: '20px',
      padding: '0 24px',
      flexGrow: ' 2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    joinClass_wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '0.0625rem solid #e0e0e0',
      padding: '0.5rem 1rem',
      width: '98vw',
    },
    joinClass_wrapper2: {
      height: ' 48px',
      color: '#5f6368',
      fill: '#5f6368',
      display: ' flex',
      alignItems: 'center',
    },
    joinClassIconClose: {
      cursor: ' pointer',
      fontSize: 'large',
    },
    joinClassBtn: {
      width: '40px !important',
      height: ' 40px !important',
    },
    topHead: {
      fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: '1.75rem',
      color: ' #80868b',
      marginLeft: '1rem',
    },
    formText: {
      color: '#7f7f7f',
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
    },
    logInfo: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row wrap',
      width: '100%',
      justifyContent: 'space-between',
    },
    joinClass_form: {
      marginTop: '1rem',
      maxWidth: '35rem',
      boxSizing: ' border-box',
      padding: '1.5rem',
      width: '100%',
      backgroundColor: '#fff',
      border: ' 0.0625rem solid #dadce0',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: ' center',
    },
  }
})
