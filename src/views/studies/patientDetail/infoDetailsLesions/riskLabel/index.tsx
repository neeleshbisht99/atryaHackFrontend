import React from 'react'

import {
  Grid,
  Typography
} from '@mui/material'
import ExclamationTriangle from './exclamationTriangle'
import {
  LABEL_TEXT_MAP,
  SEVERITY_BCKGRND_COLOR_MAP,
  SEVERITY_ICON_COLOR_MAP
} from './iindex'
import useStyles from './index.style'

const RiskLabel: React.FC<any> = ({
  severityLevel: level
}) => {
  const { classes } = useStyles()

  return (
    <div >
      <Grid
        container
        className={classes.labelContainer}
        style={{
          backgroundColor: SEVERITY_BCKGRND_COLOR_MAP[level],
        }}
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        {(level as string) !== 'na' ? (
          <Grid item>
            <ExclamationTriangle fill={SEVERITY_ICON_COLOR_MAP[level]} />
          </Grid>
        ) : (
          <></>
        )}
        <Grid item>
          <Typography variant="subtitle2">
            {LABEL_TEXT_MAP[level] || '-'}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default RiskLabel
