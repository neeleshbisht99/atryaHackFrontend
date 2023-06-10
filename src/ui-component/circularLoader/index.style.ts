import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
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
