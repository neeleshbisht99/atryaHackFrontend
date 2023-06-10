import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme:any) => {
  return {
    breadCrumbSeparator: {
      margin: '0px',
    },
    dataTableWrapper: {
      width: '100%',
      '& .MuiTableRow-root:nth-child(odd)': {
        backgroundColor: '#E7E9FF;',
      },
      '& .MuiTableRow-root:nth-child(even)': {
        backgroundColor: '#F1F2FF;',
      },
    },
    openDetailButton: {
      background: 'transparent',
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
      '&:hover': {
        background: 'transparent',
      },
    },
    lineMileSummaryChipsContainer: {
      display: 'flex',
      overflow: 'auto',
      paddingBottom: '5px',
    },
    lineMileSummaryContainer: {
      padding: '16px',
      display: 'grid',
      gridTemplateColumns: '190px 1fr',
    },
    trimHeight: {
      height: '35px',
    },
    marginRight14: {
      marginRight: '14px',
    },
    lineMileSummaryChips: {
      '& .MuiButton-text': {
        flexDirection: 'row',
        alignItems: 'baseline !important',
      },
      marginTop: '0px !important',
      background: '#F4F5FF !important',
      minWidth: 'fit-content',
      cursor: 'pointer',
      border: `1px solid transparent`,
    },
    activeChip: {
      border: `1px solid ${theme.palette.primary.main} !important`,
      background: `${theme.palette.primary.light} !important`,
    },
    clearAllButton: {
      cursor: 'pointer',
    },
    disabledClearAllButton: {
      opacity: 0.5,
      cursor: 'default',
    },
    dropdownContainer: {
      '& input': {
        fontSize: '12px',
        fontWeight: 400,
        color: '#4D4D4D',
        fontStyle: 'normal',
        fontFamily: 'inherit',
      },
    },
    activeGeoChip: {
      position: 'relative',
      minWidth: '85px',
    },
    activeGeoChipInternalContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeGeoChipAvatarLabel: {
      fontSize: '8px',
      padding: '0px 5px',
      position: 'absolute',
      top: '-10px',
      left: '8px',
      // background: 'white',
    },
    activeGeoChipLabel: {
      fontSize: '11px',
      paddingRight: '5px',
    },
    lineMileSummaryHeaderContainer: {
      display: 'flex',
      paddingBottom: '6px',
      height: '24px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
    },
    updatePlanChips: {},
    disabledChip:{
      opacity:'0.6',
      cursor:'none'
    }
  }
})


export default useStyles
