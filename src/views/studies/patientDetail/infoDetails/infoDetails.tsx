import React from 'react'
import { Grid } from '@mui/material'
import useStyles from './infoDetails.style'
import DetailCard from 'src/ui-component/cards/DetailCard'
import { DATA } from './infoDetailsSettings'

const InfoDetails = function () {

  const { classes } = useStyles()

  const infoCardData = (dataArr: any = []) => {
    const decoratedDataArr: any = []
    dataArr.map((item: any) => {
      decoratedDataArr.push(item)
    })
    return decoratedDataArr
  }

  return (
    <>
      <Grid className={classes.informationSection}>
        <Grid item xs={12} container direction="column">
          <DetailCard
            title={DATA.card1.header}
            showTitleBorder={true}
            columnsPerRow={3}
            showBorder={true}
            columnsData={infoCardData(DATA.card1.infoData)}
          />
          <DetailCard
            title={DATA.card2.header}
            showTitleBorder={true}
            columnsPerRow={3}
            showBorder={true}
            columnsData={infoCardData(DATA.card2.infoData)}
          />
          <DetailCard
            title={DATA.card3.header}
            showTitleBorder={true}
            columnsPerRow={3}
            showBorder={true}
            columnsData={infoCardData(DATA.card3.infoData)}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default InfoDetails
