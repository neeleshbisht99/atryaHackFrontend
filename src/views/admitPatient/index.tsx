import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Divider, Grid, TextField } from '@mui/material'
import useStyles from './index.style'
import MainCard from 'src/ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { Step, StepContent } from '@mui/material';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CTUploadImages from './uploadImages/uploadImages'

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

  const [tableFilterValue, setTableFilterValue] = useState({
    ...defaultFilterConfig,
    offset: 0,
    limit: 10,
    pageNo: 0,
  })


  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const [step1, setStep1] = React.useState<any>({});

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
                            value={step1?.name}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'name': event.target.value }) }}
                          />
                          <TextField
                            key="outlined-age"
                            label="Age"
                            value={step1?.age}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'age': event.target.value }) }}
                          />
                          <TextField
                            key="outlined-weight"
                            label="Weight"
                            value={step1?.weight}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'weight': event.target.value }) }}
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
                            value={step1?.bp}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'bp': event.target.value }) }}
                          />
                          <TextField
                            id="outlined-smoke"
                            label="Do you Smoke?"
                            value={step1?.phone}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'smoke': event.target.value }) }}
                          />
                          <TextField
                            // id="outlined-driknk"
                            label="Do you Drink?"
                            value={step1?.info}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'drink': event.target.value }) }}
                          />
                        </div>
                        <div style={{ display: 'flex', marginTop: '8px' }}>
                          <TextField
                            // id="outlined-hrs"
                            label="Exercise Hours"
                            value={step1?.exerciseHrs}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'exerciseHrs': event.target.value }) }}
                          />
                          <TextField
                            // id="outlined-pulse"
                            label="Pulse Rate"
                            value={step1?.info}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'pulse': event.target.value }) }}
                          />
                          <TextField
                            // id="outlined-level"
                            label="Glucose Level"
                            value={step1?.info}
                            style={{ marginRight: '50px' }}
                            onChange={(event: any) => { setStep1({ ...step1, 'glucose': event.target.value }) }}
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
                              value={step1?.history}
                              multiline
                              rows={5}
                              style={{ width: '100%' }}
                              onChange={(event: any) => { setStep1({ ...step1, 'history': event.target.value }) }}
                            />
                          </div>
                          <div style={{ display: 'flex', marginTop: '10px' }}>
                            <TextField
                              // id="outlined-medical"
                              label="Current List of Medication you take"
                              value={step1?.history}
                              multiline
                              rows={5}
                              style={{ width: '100%' }}
                              onChange={(event: any) => { setStep1({ ...step1, 'routines': event.target.value }) }}
                            />
                          </div>
                          <div style={{ display: 'flex', marginTop: '10px' }}>
                            <TextField
                              // id="outlined-medical"
                              label="Exercise Routines and Dietary Patterns"
                              value={step1?.history}
                              multiline
                              rows={5}
                              style={{ width: '100%' }}
                              onChange={(event: any) => { setStep1({ ...step1, 'routines': event.target.value }) }}
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
                          <CTUploadImages data={step1.image} onUpdate={(obj: any) => setStep1({ ...step1, 'image': obj })} />
                        </Grid>
                      </Grid>

                    </>) : ''
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
