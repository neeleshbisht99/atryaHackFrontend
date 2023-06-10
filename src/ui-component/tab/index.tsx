import React from 'react'
import { Card, Button } from '@mui/material'
import { ITabProps } from './iIndex'
import useStyles from './index.style'

const Tab = (props: ITabProps) => {
  const {
    currentTab,
    customClass,
    listDetails,
    onChange,
    customCardClass,
    customActiveClass,
  } = props

  const { classes } = useStyles()

  const handleClick = (index: number, name: string): any => {
    onChange && onChange(index, name)
  }

  return (
    <Card className={customCardClass} data-testid="tabWrapper">
      <section>
        <div className={`${classes.tab} ${customClass}`}>
          {listDetails &&
            listDetails.map(
              (item: any, index: number) =>
                item.display && (
                  <Button
                    id={`tabButtonComponent${index}`}
                    key={item.name}
                    className={
                      currentTab === item.name
                        ? `${classes.tabLinks} ${classes.active} ${customActiveClass || ''}`
                        : `${classes.tabLinks}`
                    }
                    onClick={() => {
                      if (currentTab === item.name) return
                      handleClick(index, item.name)
                    }}
                  >
                    {item.name}
                  </Button>
                )
            )}
        </div>
      </section>
    </Card>
  )
}

export default Tab
