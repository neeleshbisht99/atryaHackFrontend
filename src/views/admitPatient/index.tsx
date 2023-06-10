import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Divider, Grid, TextField } from '@mui/material'
import useStyles from './index.style'
import MainCard from 'src/ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { Step, StepContent, Backdrop } from '@mui/material';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CTUploadImages from './uploadImages/uploadImages'
import FancyLoader from 'src/ui-component/fancyLoader'
import { MainContext } from 'src/App'
import { v4 as uuidv4 } from 'uuid';

const steps = ['Fill Patient Data', 'Upload CCTA Scan Images', 'Symptoms'];

const defaultFilterConfig = {
  orderby: '-display_id',
}

const AdmitPatient = () => {

  const { classes } = useStyles()
  const {
    container,
    rootCard,
    tablePaperRoot,
  } = classes
  let navigate = useNavigate()
  const { value, setValue } = React.useContext(MainContext);
  const [tableFilterValue, setTableFilterValue] = useState({
    ...defaultFilterConfig,
    offset: 0,
    limit: 10,
    pageNo: 0,
  })


  const [activeStep, setActiveStep] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState<any>(false);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const [stepData, setStepData] = React.useState<any>({});

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (activeStep === 2) {
      setIsUploading(true)
      const newId = uuidv4();
      setValue({ [newId]: stepData, ...value })
      setTimeout(() => {
        setIsUploading(false)
        navigate(`/report/${newId}`);
      }, 8000)
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  return (
    <MainCard title="Admit Patient">
      {
        isUploading ? (
          <Backdrop open={true}
            style={{
              zIndex: 1501,
            }}
          >
            <FancyLoader loaderText={'Sit back and relax, Processing Data....'} />
          </Backdrop>
        )
          : ''
      }
      <Card className={rootCard}>
        <Grid container className={container}>
          <Grid className={tablePaperRoot} item xs={12}>
            <Box sx={{ width: '700px', padding: '15px 20px' }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <Card
                className={classes.mainCard2}
                style={{ margin: '25px 0px' }}
              >
                {
                  activeStep === 0 ? (
                    <>
                      <div style={{ padding: '20px 0px' }}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 700, }}
                        >
                          Basic Info
                       </Typography>
                        <Divider style={{ margin: '10px 0px 20px 0px' }} />
                        <div style={{ display: 'flex', }}>
                          <TextField
                            key="outlined-name"
                            label="Name"
                            value={stepData?.name}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'name': event.target.value }) }}
                          />
                          <TextField
                            key="outlined-age"
                            label="Age"
                            value={stepData?.age}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'age': event.target.value }) }}
                          />
                          <TextField
                            key="outlined-weight"
                            label="Weight"
                            value={stepData?.weight}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'weight': event.target.value }) }}
                          />
                        </div>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 700, marginTop: '30px' }}
                        >
                          Lifestyle
                       </Typography>
                        <Divider style={{ margin: '10px 0px 20px 0px' }} />
                        <div style={{ display: 'flex' }}>
                          <TextField
                            // id="outlined-bp"
                            label="Blood Pressure"
                            value={stepData?.bp}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'bp': event.target.value }) }}
                          />
                          <TextField
                            id="outlined-smoke"
                            label="Do you Smoke?"
                            value={stepData?.smoke}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'smoke': event.target.value }) }}
                          />
                          <TextField
                            // id="outlined-driknk"
                            label="Do you Drink?"
                            value={stepData?.drink}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'drink': event.target.value }) }}
                          />
                        </div>
                        <div style={{ display: 'flex', marginTop: '8px' }}>
                          <TextField
                            // id="outlined-hrs"
                            label="Exercise Hours"
                            value={stepData?.exerciseHrs}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'exerciseHrs': event.target.value }) }}
                          />
                          <TextField
                            // id="outlined-pulse"
                            label="Pulse Rate"
                            value={stepData?.pulse}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'pulse': event.target.value }) }}
                          />
                          <TextField
                            // id="outlined-level"
                            label="Glucose Level"
                            value={stepData?.glucose}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStepData({ ...stepData, 'glucose': event.target.value }) }}
                          />
                        </div>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 700, marginTop: '30px' }}
                        >
                          Other Details
                       </Typography>
                        <Divider style={{ margin: '10px 0px 20px 0px' }} />
                        <div>
                          <div style={{ display: 'flex' }}>
                            <TextField
                              // id="outlined-medical"
                              label="Medical History"
                              value={stepData?.history}
                              multiline
                              rows={5}
                              style={{ width: '100%' }}
                              onChange={(event: any) => { setStepData({ ...stepData, 'history': event.target.value }) }}
                            />
                          </div>
                          <div style={{ display: 'flex', marginTop: '10px' }}>
                            <TextField
                              // id="outlined-medical"
                              label="Current List of Medication you take"
                              value={stepData?.medication}
                              multiline
                              rows={5}
                              style={{ width: '100%' }}
                              onChange={(event: any) => { setStepData({ ...stepData, 'medication': event.target.value }) }}
                            />
                          </div>
                          <div style={{ display: 'flex', marginTop: '10px' }}>
                            <TextField
                              // id="outlined-medical"
                              label="Exercise Routines and Dietary Patterns"
                              value={stepData?.diet}
                              multiline
                              rows={5}
                              style={{ width: '100%' }}
                              onChange={(event: any) => { setStepData({ ...stepData, 'diet': event.target.value }) }}
                            />
                          </div>
                        </div>
                      </div>


                    </>

                  ) : (
                    activeStep === 1 ? (<>
                      <Grid item container>
                        <Grid item xs={12}>
                          {/* <Typography variant="body1">Upload CCTA Scan Images</Typography> */}
                        </Grid>
                        <Grid item xs={12}>
                            <CTUploadImages data={stepData.image} onUpdate={(obj: any) => setStepData({ ...stepData, 'image': obj })} />
                        </Grid>
                      </Grid>

                      </>) : (
                        <>
                          <div style={{ padding: '20px 0px' }}>
                            <Typography
                              variant="h5"
                              style={{ fontWeight: 700, }}
                            >
                              Current symptoms
                            </Typography>
                            <Divider style={{ margin: '10px 0px 20px 0px' }} />
                            <div style={{ display: 'flex', }}>
                              <TextField
                                key="outlined-name"
                                label="Chest Pain/Angina"
                                value={stepData?.pain}
                                style={{ marginRight: '50px' }}
                                onChange={(event: any) => { setStepData({ ...stepData, 'pain': event.target.value }) }}
                              />
                              <TextField
                                key="outlined-age"
                                label="Shortness of Breadth"
                                value={stepData?.shortness}
                                style={{ marginRight: '50px' }}
                                onChange={(event: any) => { setStepData({ ...stepData, 'shortness': event.target.value }) }}
                              />
                              <TextField
                                key="outlined-weight"
                                label="Fatigue"
                                value={stepData?.fatigue}
                                style={{ marginRight: '50px' }}
                                onChange={(event: any) => { setStepData({ ...stepData, 'fatigue': event.target.value }) }}
                              />
                            </div>
                            <Typography
                              variant="h5"
                              style={{ fontWeight: 700, marginTop: '30px' }}
                            >
                              Diagnostic test results
                       </Typography>
                            <Divider style={{ margin: '10px 0px 20px 0px' }} />
                            <div>
                              <div style={{ display: 'flex' }}>
                                <TextField
                                  // id="outlined-medical"
                                  label="ECG results"
                                  value={stepData?.ecg}
                                  multiline
                                  rows={5}
                                  style={{ width: '100%' }}
                                  onChange={(event: any) => { setStepData({ ...stepData, 'ecg': event.target.value }) }}
                                />
                              </div>
                              <div style={{ display: 'flex', marginTop: '10px' }}>
                                <TextField
                                  // id="outlined-medical"
                                  label="Stress Tests"
                                  value={stepData?.stressTests}
                                  multiline
                                  rows={5}
                                  style={{ width: '100%' }}
                                  onChange={(event: any) => { setStepData({ ...stepData, 'stressTests': event.target.value }) }}
                                />
                              </div>
                              <div style={{ display: 'flex', marginTop: '10px' }}>
                                <TextField
                                  // id="outlined-medical"
                                  label="Cardiac Catheterization"
                                  value={stepData?.cath}
                                  multiline
                                  rows={5}
                                  style={{ width: '100%' }}
                                  onChange={(event: any) => { setStepData({ ...stepData, 'cath': event.target.value }) }}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )
                  )
                }
              </Card>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
          </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
            </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isStepOptional(activeStep) && (
                      <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                        Skip
                      </Button>
                    )}
                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </MainCard >
  )
}

export default React.memo(AdmitPatient)
