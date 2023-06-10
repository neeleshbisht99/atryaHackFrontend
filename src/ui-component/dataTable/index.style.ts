import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    cellContainer: {
      height: '100%',
    },
    gridContainer: {

    },
    checkBoxContainer: {
      zIndex: 100,
      position: 'absolute',
      width: '20px',
      height: '20px',
      left: '16px',
      top: '14px',
    },
    disabledContainer: {
      pointerEvents: 'none',
      opacity: 0.5
    }
  }
})

export default useStyles
