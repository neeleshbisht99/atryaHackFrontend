import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import useStyles from './index.style'
import clsx from 'clsx'
import Button, { ButtonProps } from '@mui/material/Button';

const ColorChip = styled(Button)<ButtonProps>(() => ({
  root: {
    background: '#FFFFFF',
    textTransform: 'capitalize',
    padding: '10px 15px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
    '& .MuiButton-label': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    marginTop: '16px',
    border: '1px solid #828282',
    color: '#4F4F4F !important'
  }
}));

const segments = [
  {
    id: 1,
    title: 'RCA'
  },
  {
    id: 2,
    title: 'R-PDA'
  },
  {
    id: 3,
    title: 'R-PLB',
    isDisabled: true,
  },
  {
    id: 4,
    title: 'LM+LAD'
  },
  {
    id: 5,
    title: 'Cx',
    isDisabled: true,
  },
  {
    id: 6,
    title: 'OM1'
  },
  {
    id: 7,
    title: 'L-PBA',
    isDisabled: true,
  },
  {
    id: 8,
    title: 'L-PLB',
    isDisabled: true,
  },
  {
    id: 9,
    title: 'R1'
  },
]

const VesselSelector = () => {
  const { classes } = useStyles()
  const [selectedChips, setSelectedChips] = useState<any>(1)
  return (
    <>

      <div style={{
        background: 'white',
        margin: '10px',
        padding: '10px'
      }}>
        <Typography style={{ color: '#505050', fontWeight: 700, marginBottom: '10px' }} variant="subtitle1">
          Select Vessel :
        </Typography>
        <div className={`${classes.lineMileSummaryChipsContainer} scrollbar-width-thin`} >
          {segments?.map((obj: any, index: any) => (
            <ColorChip
              key={obj?.id}
              className={clsx({
                [classes.trimHeight]: true,
                [classes.marginRight14]: true,
                [classes.lineMileSummaryChips]: true,
                [classes.activeChip]: selectedChips === obj.id,
                [classes.disabledChip]: obj?.isDisabled,
              })}
              onClick={() => {
                if (!obj?.isDisabled) { setSelectedChips(obj?.id) }
              }}
            >
              <Typography variant="body2" style={{ fontSize: '11px', paddingRight: '5px' }}>
                {obj?.title}
              </Typography>
            </ColorChip>
          ))}

          <Button
            style={{
              float: 'right',
              padding: '8px 0',
              width: '160px',
              marginLeft: 10,
              borderRadius: '0px'
            }}
            variant={'outlined'}
            color="secondary"
          >
            Add Vessel
          </Button>
        </div>

      </div>


    </>
  )
}

export default VesselSelector
