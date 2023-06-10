import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    tab: {
      overflow: 'auto',
      background: '#ffffff',
      boxShadow: ' 0px 0px 20px rgba(0, 0, 0, 0.05)',
      borderRadius: '5px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      '& button': {
        backgroundColor: 'inherit',
        float: 'left',
        border: 'none',
        outline: 'none',
        cursor: ' pointer',
        padding: '14px 16px',
        transition: '0.3s',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0px 10px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '130%',
        textTransform: 'uppercase',
        height: '100%',
      },
      '& button$active': {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '130%',
        borderBottom: '3px solid red',
        color: '#ef504d',
        '& $badge': {
          background: '#ef504d',
        },
      },
    },
    active: {},
    tabLinks: {
      boxShadow: 'none',
      borderRadius: '0px',
      display: 'flex',
      justifyContent: 'center !important',
      width: '200px',
    },

    /* Style the tab content */
    tabContent: {
      display: 'none',
      padding: '6px 12px',
      border: '1px solid #ccc',
      borderTop: ' none',
    },
    badge: {
      minWidth: '70px !important',
      background: '#828282',
      borderRadius: '30px',
      color: '#fff',
      margin: '0px 0px 0px 7px',
    },
    value: {
      fontSize: '10px',
      lineHeight: '22px',
    },
    width: {
      // width: '35px',
    },
  }
})

export default useStyles
