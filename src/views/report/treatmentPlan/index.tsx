import React, { useState } from 'react'
import { Card, Grid, Tabs, Tab } from '@mui/material'
import useStyles from './index.style'
import MainCard from 'src/ui-component/cards/MainCard';
import { Page, Text, View, Document, StyleSheet, Image, Line } from '@react-pdf/renderer';
import Hospital from 'src/assets/images/hospital.jpg'
import QRCode from 'src/assets/images/qrcode.png'
import Loader from 'src/ui-component/Loader';
// Create styles

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    display: "flex",
    alignSelf: "center",
    fontWeight: 800
    // fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    display: "flex",
    alignSelf: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 12,
    margin: '5px 0px',
    // fontFamily: 'Oswald'
  },
  caption: {
    fontSize: 14,
    textAlign: 'justify',
    // fontFamily: 'Times-Roman',
    display: "flex",
    alignSelf: "flex-start"
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    // fontFamily: 'Times-Roman',
    display: "flex",
    alignSelf: "center"
  },
  normalText: {
    margin: 12,
    fontSize: 14,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    height: '50px',
    width: '50px'
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
    display: "flex",
    alignSelf: "center"
  },
  heading: {
    fontSize: 14,
    textAlign: 'justify',
    // fontFamily: 'Times-Roman',
    display: "flex",
    alignSelf: "flex-start",
    fontWeight: 600
  },
  line: {
    borderTop: '1pt solid black',
    marginTop: '2px'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    display: "flex",
    alignSelf: "center",
    color: 'grey',
  },
});

const TreatmentPlan = (props: any) => {
  const { data, loading } = props

  // const data = "CCTA Report:\n\nThe following report presents the results of a computed tomography angiography (CCTA) scan of a patient's coronary arteries. The patient's total plaque volume was found to be 567 cubic-mm, with a percent atheroma volume of 21%. The patient had 4 severe-stenosis and 2 moderate stenosis, with a CAD-RAD score of 4.\n\nThe right coronary artery (RCA) showed 2 lesions, with a maximum stenosis of 18% and a minimum stenosis of 9%. The plaque volume in the RCA was found to be 200 cubic mm.\n\nThe left main coronary artery (LMCA) showed 3 lesions, with a maximum stenosis of 58% and a minimum stenosis of 49%. The plaque volume in the LMCA was found to be 367 cubic mm.\n\nBased on these findings, the patient is at a high risk of developing coronary artery disease (CAD). The presence of severe and moderate stenosis, along with a high plaque volume, indicates a significant narrowing of the coronary arteries, which can lead to a heart attack or other cardiovascular events.\n\nThe CAD-RAD score of 4 also suggests that the patient is at a high risk of developing CAD in the future. The lesions in the LMCA, in particular, require immediate attention, as they pose a significant risk to the patient's health.\n\nIn conclusion, the CCTA scan has revealed significant narrowing of the patient's coronary arteries, indicating a high risk of developing CAD. The patient should undergo further evaluation and treatment to prevent the progression of the disease and reduce the risk of cardiovascular events."
  let dataArr = data?.length ? data?.split('\n\n') : []
  dataArr = dataArr?.reduce((acc: any, item: any) => {
    if (item) {
      const arr = item?.split('-')
      acc = [...acc, ...arr]
    }
    return acc
  }, [])

  const { classes } = useStyles()
  const {
    container,
    rootCard,
    tablePaperRoot,
  } = classes

  if (loading || !data) {
    return <Loader />
  }
  return (
    <MainCard title=" " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card className={rootCard}>
        <Document>
          <Page style={styles.body}>
            <View style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }}>
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <img
                  style={styles.image}
                  src={Hospital}
                />
                <Text style={styles.caption}>Gen-AI Hospital</Text>
                <Text style={styles.caption}>Address: Whitefield, Bengaluru 110066</Text>
                <Text style={styles.caption}>Phone: +12 23232323</Text>
              </View>
              <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <img
                  style={styles.image}
                  src={QRCode}
                />
              </View>
            </View>
            <div style={styles.line} />
            <div style={styles.line} />

            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0px' }}>
              <Text style={styles.title}>
                Treatment
            </Text>
              <Text style={styles.subtitle}>
                Done taking volume sections of cardiac region after injecting IV contrast at a flow rate 5 ml/second using a pressure injector & ECG gating on a 194 slice/sec Syngovia wanner_ MIP.
                Curved MPR & VRT images of coronary arteries & heart were processed and reviewed. Patient tolerated the procedure well. Volume of contrast is roc ml.
            </Text>
            </View>
            <Text style={styles.heading}>
              Treatment Recommendation:
            </Text>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '10px 0px' }}>
              {
                dataArr?.map((item: any) => (
                  <Text style={styles.normalText}>
                    {item}
                  </Text>
                ))
              }
            </View>

            {/* <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed /> */}
          </Page>
        </Document>
      </Card>
    </MainCard>
  )
}

export default React.memo(TreatmentPlan)
