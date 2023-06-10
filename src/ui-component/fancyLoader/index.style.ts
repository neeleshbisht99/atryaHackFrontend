import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme:any) => {
  return {
    fancyLoaderWrap: {
      width: '350px',
      height: '200px',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#4D4D4D',
      zIndex:1500
    },
    loaderTextStyle: {
      marginTop: 15,
      color: 'white',
    },
    loader: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: ' translate(-50%, -50%)',
      zIndex: 2,
      '& svg': {
        margin: 0,
      },
    },
  }
})

export default useStyles
