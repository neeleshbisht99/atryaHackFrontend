import React from 'react'
import { CircularProgress } from '@mui/material'
import useStyles from './index.style'

interface ILoaderProps {
  style?: React.CSSProperties
}

const Loader: React.FC<ILoaderProps> = ({ style }) => {
  const { classes } = useStyles()

  return (<>
    <div style={style} className={classes.loader}>
      <CircularProgress />
    </div></>)
}

export default React.memo(Loader)
