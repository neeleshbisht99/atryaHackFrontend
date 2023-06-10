import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {informationSection: {
    padding: '13px 5px',
    height: '100%',

  },
  exportContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    cursor: 'pointer',
  },
  exportExcelContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  verticalGutter: {
    margin: theme.spacing(2, 0),
  },
  modal: {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    padding: '0 30px',
    background: '#f4f5ff',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '170px',
    width: ' 300px',
    justifyContent: 'space-around',
    alignItems: 'center',
    '&:focus': {
      outline: 'none',
    },
  },
  modalButton120: {
    width: 100,
    margin: 10,
  },
  planNameContainer: {
    padding: '8px 38px 8px 18px',
    borderRadius: '90px',
    border: '1px solid #E3E3E3',
    height: '33px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 'fit-content',
    minWidth: '150px',
    marginTop: '10px',
  }}
})

export default useStyles
