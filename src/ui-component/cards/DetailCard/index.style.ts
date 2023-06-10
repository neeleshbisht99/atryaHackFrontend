import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {
    cardContainer: {
      display: 'flex',
      margin: '16px 0px',
      flexDirection: 'column',
    },
    cardTitle: {
      paddingLeft: '16px',
    },
    gridContainer: {
      borderRadius: '5px',
      margin: '8px 0px',
      display: 'grid',
      gridGap: '16px',
      wordBreak: 'break-word',
    },
    showGridBorder: {
      border: '1px solid #e0e0e0',
      padding: '15px',
      margin: '15px',
    },
    columnLabel: {
      marginBottom: '8px',
    },
    editIcon: {
      color: '#818181',
      fontSize: 17,
      '&:hover': { cursor: 'pointer' },
    },
    textField: {
      height: 40,
      marginLeft: theme.spacing(1),
      borderRadius: 40,
      '& label.Mui-focused': {
        color: 'grey',
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: 40,
        '&.Mui-focused fieldset': {
          borderColor: 'grey',
        },
      },
    },
    editComponent: {
      width: 200,
      boxShadow: '0px 1px 0px rgba(0,0,0,0.12)',
    },
    buttonRoot: {
      height: '30px',
      textDecoration: 'underline',
    },
  }
})

export default useStyles
