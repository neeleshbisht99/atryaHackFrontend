import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
   'active': {
    fontWeight: 700,
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#3573B9',
    width: '150px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '3px 0px 0px 3px'
   },
   'default': {
    fontWeight: 400,
    fontSize: '16px',
    color: '#A4A4A4',
    backgroundColor: '#fff',
    width: '150px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0px 3px 3px 0px'
   },
   container: {
    borderRadius: '3px',
    display: 'flex',
    height: '40px',
    cursor: 'pointer'
   }
  }
})


export default useStyles
