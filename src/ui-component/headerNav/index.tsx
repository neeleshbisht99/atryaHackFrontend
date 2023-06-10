import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import useStyles from './index.style'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface iHeaderNav {
  to?: string
  fallbackUrl?: string
  title: string | React.ReactNode
}
const HeaderNav = ({ to, title, fallbackUrl }: iHeaderNav) => {
  const { classes } = useStyles()
  let navigate = useNavigate()
  const handleClick = () => {
    if (to) {
      navigate(to)
    } else if (fallbackUrl) {
      navigate(fallbackUrl)
    }
    else {
      navigate('/')
    }
  }

  return to ? (
    <NavLink className={classes.headerActions} to={to}>
      <ChevronLeftIcon />
      <Typography variant="h5">{title}</Typography>
    </NavLink>
  ) : (
    <div className={classes.headerActions} onClick={handleClick}>
      <ChevronLeftIcon />
      <Typography variant="h5">{title}</Typography>
    </div>
  )
}

export default HeaderNav
