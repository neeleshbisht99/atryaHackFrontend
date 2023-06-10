import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {
    headerActions: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    width: 'fit-content',
  }}
})

export default useStyles
