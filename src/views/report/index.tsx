import React, { useEffect, useState } from 'react'
import { Card, Grid, Tabs, Tab } from '@mui/material'
import useStyles from './index.style'
import MainCard from 'src/ui-component/cards/MainCard';
import PatientReport from './patientReport'
import { MainContext } from 'src/App'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import TreatmentPlan from './treatmentPlan';

const Report = () => {

  const { classes } = useStyles()
  const {
    container,
    rootCard,
    tablePaperRoot,
  } = classes
  const { value, setValue } = React.useContext(MainContext);
  const { id } = useParams<any>()


  const [reportData, setReportData] = useState<any>({})
  const [treatmentData, setTreatmentData] = useState<any>({})

  const reportMutation = useMutation({
    mutationFn: (text: any) => {
      return axios.post('http://localhost:8000/chat/', { "text": text })
    },
  })
  console.log("value", value)
  const treatementMutation = useMutation({
    mutationFn: (text: any) => {
      return axios.post('http://localhost:8000/chat/', { "text": text })
    },
  })


  /// todo : 
  useEffect(() => {
    // reportMutation.mutate("\ngenerate a real world well detailed CCTA report from these findings of a preson \ntotal plaque: 567cubic-mm\npercent atheroma volumn : 21%\nsevere-stenosis: 4  \nmoderate stenosis: 2 \ncad-rad-score: 4 \n\nlesions-count-rca: 2  \nmaxium-stenosis-rca : 18 %\nminimum-stenosis-rca: 9% \nplaque-volume:200 cubic mm\n\nlesions-count-lmca: 3  \nmaxium-stenosis-rca : 58 %\nminimum-stenosis-rca: 49% \nplaque-volume: 367 cubic mm\n")
    // treatementMutation.mutate("my patient have stenosis of 70% in LCA atery, and 50% stenosis in another artery, this patient in the past have 2 heart attacks, a stent in one artery,  drinks and smokes a lot, faces pain in left chest while running, recommed medication and treatment plan for this. Mention the medication in detail with amount and routine")
  }, [])

  useEffect(() => {
    if (reportMutation.isSuccess) {
      const updatedreportData = reportMutation?.data?.data?.choices?.[0]?.message?.content
      setReportData(updatedreportData)
    }
  }, [reportMutation.isSuccess])

  useEffect(() => {
    if (treatementMutation.isSuccess) {
      const updatedreportData = treatementMutation?.data?.data?.choices?.[0]?.message?.content
      setTreatmentData(updatedreportData)
    }
  }, [treatementMutation.isSuccess])



  const [tab, setTab] = useState<any>(0)
  return (
    <MainCard title="Patient List">
      <Card className={rootCard}>
        <Grid container className={container}>
          <Grid className={tablePaperRoot} item xs={12}>
            <div>
              <Tabs value={tab} onChange={(e: any, value: any) => setTab(value)} centered>
                <Tab label="Report" />
                <Tab label="Treatment Plan" />
              </Tabs>
            </div>
            <div>
              {
                tab === 0 ? <PatientReport data={reportData} bioData={value?.[id || '']} loading={reportMutation.isLoading} /> : <TreatmentPlan data={treatmentData} loading={treatementMutation.isLoading} />
              }
            </div>
          </Grid>
        </Grid>
      </Card>
    </MainCard >
  )
}

export default React.memo(Report)
