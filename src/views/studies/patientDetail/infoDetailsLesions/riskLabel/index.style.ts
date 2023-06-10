import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {
    labelContainer: {
      height: '30px',
      width: '100px',
      borderRadius: '4px',
    },
    popupContainer: {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      borderRadius: '9px',
    },
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      pointerEvents: 'auto',
      padding: theme.spacing(1),
    },
  }
})

export default useStyles
