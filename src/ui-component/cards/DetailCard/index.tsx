import React from 'react'
import { Typography } from '@mui/material'
import useStyles from './index.style'


const DetailCard: React.FC<any> = ({
    columnsData,
    title = '',
    showBorder = true,
    showTitleBorder = true,
    style = {},
    columnsPerRow = 5,
}) => {
    const { classes } = useStyles()


    const renderColumns = () => {
        if (!columnsData || !columnsData.length) {
            return null
        }

        return columnsData.map((column: any, index: any) => {
            return (
                <div key={`key${index}`}>
                    <Typography variant="subtitle2" className={classes.columnLabel}>
                        {column.label}
                    </Typography>
                    <Typography variant="body1" style={{ display: 'inline-block' }}>
                        {column.value || '-'}
                    </Typography>
                </div>
            )
        })
    }


    return (
        <div style={style} className={classes.cardContainer}>
            <Typography variant="subtitle1" className={showTitleBorder ? classes.cardTitle : ''}>
                {title}
            </Typography>
            <div
                className={`${classes.gridContainer} ${showBorder && classes.showGridBorder} card-gridContainer`}
                style={{
                    gridTemplateColumns: `repeat(${columnsPerRow}, 1fr)`,
                }}
            >
                {renderColumns()}
            </div>
        </div>
    )
}

export default React.memo(DetailCard)
