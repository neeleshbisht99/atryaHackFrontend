import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Grid } from '@mui/material'
import useStyles from './index.style'
import PatientDataTable from './patientDataTable'
import { tableRowLabels } from './setting'
import { DATA } from './dummy'
import MainCard from 'src/ui-component/cards/MainCard';

const defaultFilterConfig = {
  orderby: '-display_id',
}

const PatientList = () => {

  const { classes } = useStyles()
  const {
    container,
    rootCard,
    tablePaperRoot,
  } = classes
  let navigate = useNavigate()

  const [tableFilterValue, setTableFilterValue] = useState({
    ...defaultFilterConfig,
    offset: 0,
    limit: 10,
    pageNo: 0,
  })

  const loading = false
  const data = DATA

  const handleRowClick = (rowParams: any, a: any) => {
    console.log(rowParams, a)
    let id = rowParams?.id
    if (!id) return
    navigate(`/patient/${id}`)
  }

  return (
    <MainCard title="Patient List">
      <Card className={rootCard}>
        <Grid container className={container}>
          <Grid className={tablePaperRoot} item xs={12}>
            <PatientDataTable
              tableRowLabels={tableRowLabels || []}
              tableFilterValue={tableFilterValue}
              setTableFilterValue={setTableFilterValue}
              data={data}
              loading={loading}
              handleRowClick={handleRowClick}
            />
          </Grid>
        </Grid>
      </Card>
    </MainCard >
  )
}

export default React.memo(PatientList)
