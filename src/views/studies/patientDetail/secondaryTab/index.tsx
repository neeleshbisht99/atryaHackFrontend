import React from 'react'
import useStyles from './index.style'


interface ITaskTypeTab {
  activeTaskTypeTab: string
  taskTypes: Array<any>
  onTaskTypeTabChange: (curentTab: string) => void
}

const SecondaryTab = (props: ITaskTypeTab) => {
  const { taskTypes = [], activeTaskTypeTab = '', onTaskTypeTabChange = () => { } } = props
  const { classes } = useStyles()
  return (
    <div className={classes.container}>
      {taskTypes.map((item: any) => (
        <div
          className={activeTaskTypeTab === item?.id ? classes.active : classes.default}
          onClick={() => onTaskTypeTabChange(item)}
        >
          {item?.label}
        </div>
      ))}
    </div>
  )
}

export default React.memo(SecondaryTab)
