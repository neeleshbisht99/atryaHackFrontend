import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
    return {
    content: {
        width: '100%',
        minHeight: '100%',
        padding: 0,
        // paddingBottom: theme.spacing(2.5),
        boxShadow: '0 0 0 0',
        backgroundColor: '#FFF !important'
    },

    mainCard: {
        width: '100%',
        display: 'grid',
        position: 'relative',
        boxShadow: 'none',
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: '50% 50%',
            height: '500px'
        }
    },
    mainCard2: {
        width: 'fit-content',
        display: 'grid',
        position: 'relative',
        boxShadow: 'none',
        background: '#1f376aed',
        padding: '30px'
    },
    tab: {
        width: '100%',
        margin: theme.spacing(1, 1, 1, 1),
        boxShadow: '0 0 0 0'
    }

}})

export default useStyles
