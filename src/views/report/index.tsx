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

  const bioData = value?.[id || '']

  /**reportData = {
   * name -
   * age -
   *
   *
   *
   *
cadRad:
calcium:

stenosisCount -> add lesion count
maximumStenosis -> max of both
 severeStenosis -> random  **
  moderateStenosis -> stenosisCount - severeStenosis **
  totalPlaqueVolume -> add totalPlaqueVolume

  lesionsCountRca -> segment anything
  maxiumStenosisRca -> create a random between 50 - 80
  minimumStenosisRca -> create random between 5 - 20
  plaqueVolumeRca: -> creata random plauq volumne 50 -150

  lesionsCountLmca -> segment anything
  maxiumStenosisLmca-> create a random between 50 - 80
  minimumStenosisLmca-> create random between 5 - 20
  plaqueVolumeLmca:-> creata random plauq volumne 50 -150

  stenosisCount:
  maximumStenosis:
  percentAtheromaVolume --
  totalPlaqueVolume:
  severeStenosis
  moderateStenosis
  lesionsCountRca
  maxiumStenosisRca
  minimumStenosisRca
  plaqueVolumeRca:
  lesionsCountLmca
  maxiumStenosisLmca
  minimumStenosisLmca
  plaqueVolumeLmca:


  pastHeartAttack -
  hasStents -

  }**/
  /// todo : 

  useEffect(() => {
    if (bioData) {
      const reportPrompt = `\ngenerate a real world well detailed CCTA report from these findings of a person  name ${bioData?.name || ''}, age ${bioData?.age || ''} \ntotal plaque Volume: ${bioData?.totalPlaqueVolume || ''}cubic-mm\npercent atheroma volume : ${bioData?.percentAtheromaVolume || ''}\nsevere stenosis: ${bioData?.severeStenosis || ''}  \nmoderate stenosis: ${bioData?.moderateStenosis || ''} \ncad rad score: ${bioData?.cadRad || ''} \n\nlesions count in rca: ${bioData?.lesionsCountRca || ''}  \nmaximum stenosis in rca : ${bioData?.maxiumStenosisRca || ''}\nminimum stenosis in rca: ${bioData?.minimumStenosisRca || ''} \nplaque volume in rca:${bioData?.plaqueVolumeRca || ''} cubic mm\n\nlesions count in lmca: ${bioData?.lesionsCountLmca || ''}  \nmaximum stenosis in lmca : ${bioData?.maxiumStenosisLmca || ''}\nminimum stenosis in lmca: ${bioData?.minimumStenosisLmca || ''} \nplaque volume in lmca: ${bioData?.plaqueVolumeLmca || ''}cubic mm\n`
      reportMutation.mutate(reportPrompt)

      const doesDrinks = (bioData?.drink || '') === "Yes" ? 'does drinks' : 'does not drinks'
      const hasStents = (bioData?.hasStents || '') === "Yes" ? 'have stents' : 'do not have any stents'
      const hadHeartAttack = (bioData?.pastHeartAttack || '') === "Yes" ? 'had heart attack in past' : 'did not had heart attack in past'
      const doesSmokes = (bioData?.smoke || '') === "Yes" ? 'does smokes' : 'does not smokes'
      const doesAngina = (bioData?.pain || '') === "Yes" ? 'faces angina' : 'does not faces angina'
      const treatmentPrompt = `my patient name ${bioData?.name || ''}, age ${bioData?.age || ''} have stenosis of ${bioData?.maxiumStenosisRca || ''} in RCA atery, and ${bioData?.maxiumStenosisLmca || ''} stenosis in LMCA artery, this patient ${hadHeartAttack} and ${hasStents},  ${doesDrinks} and ${doesSmokes} , ${doesAngina} while running, recommed medication and treatment plan for this. Mention the medication in detail with amount and routine`
      treatementMutation.mutate(treatmentPrompt)
    }
  }, [bioData])

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
    <MainCard title="Report & Treatment Plan">
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
                tab === 0 ? <PatientReport data={reportData} bioData={bioData} loading={reportMutation.isLoading} /> : <TreatmentPlan data={treatmentData} loading={treatementMutation.isLoading} />
              }
            </div>
          </Grid>
        </Grid>
      </Card>
    </MainCard >
  )
}

export default React.memo(Report)
