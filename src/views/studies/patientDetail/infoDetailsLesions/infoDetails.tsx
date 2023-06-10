import React from 'react'
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import useStyles from './infoDetails.style'
import DetailCard from 'src/ui-component/cards/DetailCard'
import RiskLabel from './riskLabel'
import { LESION_DATA } from './infoDetailsSettings'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ERiskLevel } from './riskLabel/iindex'


export const getRiskLevelFromValue = (value: number) => {
  switch (value) {
    case 1:
      return ERiskLevel.LOW
    case 2:
      return ERiskLevel.MEDIUM
    case 3:
      return ERiskLevel.HIGH
  }
}

const InfoDetailsLesions = function () {
  const { classes } = useStyles()

  const infoCardData = (dataArr: any = []) => {
    const decoratedDataArr: any = []
    dataArr.map((item: any) => {
      if (item?.isVolume) {
        decoratedDataArr.push({
          ...item,
          value: (
            <Typography variant="body1"> {item?.value}mm<sup>3</sup></Typography>
          ),
        })
      }
      else {
        decoratedDataArr.push(item)
      }
    })

    return decoratedDataArr
  }

  return (
    <>
      <Grid className={classes.informationSection}>
        {LESION_DATA.map((item: any, index: any) => (
          <>
            <Accordion defaultExpanded={index === 0} style={{ margin: "10px 0px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid item xs={12} direction="column" style={{ margin: '0px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                    <div style={{ width: 'fit-content' }}>
                      <Typography variant="body2">Lesion Name</Typography>
                      <div className={classes.planNameContainer}>
                        {' '}
                        <Typography variant="h6" style={{ fontSize: '14px' }}>
                          {item?.title}
                        </Typography>{' '}
                      </div>
                    </div>
                    <div style={{ margin: '0px 0px 5px 25px' }}>
                      {/* <RiskLabel
                          severityLevel={getRiskLevelFromValue(Number(item?.risk?.value))}
                        /> */}
                    </div>
                  </div>
                  {/* <div style={{width:'fit-content', background:'#EF504D', color:'white', padding:'5px', borderRadius:'10px'}}> 
                      <Typography variant="body2" style={{color:'white'}}>More Details</Typography>
                  </div> */}
                  <div style={{ margin: '0px 0px 5px 25px' }}>
                    <RiskLabel
                      severityLevel={getRiskLevelFromValue(Number(item?.risk?.value))}
                    />
                  </div>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} container direction="column" style={{ overflowY: 'scroll' }}>
                  <DetailCard
                    title={item?.data.card1.header}
                    showTitleBorder={true}
                    columnsPerRow={3}
                    showBorder={true}
                    columnsData={infoCardData(item?.data.card1.infoData)}
                  />
                  <DetailCard
                    title={item?.data.card2.header}
                    showTitleBorder={true}
                    columnsPerRow={3}
                    showBorder={true}
                    columnsData={infoCardData(item?.data.card2.infoData)}
                  />
                  <DetailCard
                    title={item?.data.card3.header}
                    showTitleBorder={true}
                    columnsPerRow={3}
                    showBorder={true}
                    columnsData={infoCardData(item?.data.card3.infoData)}
                  />
                </Grid>
              </AccordionDetails>
            </Accordion>

          </>
        ))}

      </Grid>
    </>
  )
}

export default InfoDetailsLesions
