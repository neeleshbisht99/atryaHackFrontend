import React from 'react'
import { Card, Typography } from '@mui/material'
import TeaLoader from './teaLoader'
import useStyles from './index.style'

interface ILoaderProps {
  style?: React.CSSProperties
  isFancy?: boolean
  loaderText?: string
}

const FancyLoader: React.FC<ILoaderProps> = ({ style, isFancy, loaderText }) => {
  const { classes } = useStyles()
  const loaderEl = (
    <Card className={classes.fancyLoaderWrap} style={style}>
      <TeaLoader />
      <Typography className={classes.loaderTextStyle} variant="body1">
        {loaderText || 'Please wait...'}
      </Typography>
    </Card>
  )
  return <>{loaderEl}</>
}

export default React.memo(FancyLoader)
