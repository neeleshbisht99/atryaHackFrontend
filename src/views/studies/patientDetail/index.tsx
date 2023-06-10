import clsx from 'clsx'
import Tab from 'src/ui-component/tab'
import Loader from 'src/ui-component/circularLoader'
import HeaderNav from 'src/ui-component/headerNav'
import SecondaryTab from './secondaryTab'
import React, { useState } from 'react'
import { Button, Card, Grid, Paper, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import InfoDetails from './infoDetails/infoDetails'
import InfoDetailsLesions from './infoDetailsLesions/infoDetails'
import useStyles from './index.style'
import { fnGetHeaderProps, } from './settings'
import PlanKeyPoints from './vesselSelector'
import { TABS } from './settings'
import DetailCard from 'src/ui-component/cards/DetailCard'
import Artery from 'src/assets/images/artery.png'
import HEARTSVG from 'src/assets/images/HEART_IMG.png'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'

const PatientDetails = () => {
    const theme = useTheme()
    const { classes } = useStyles()
    const headerNavProps = fnGetHeaderProps()
    let navigate = useNavigate()
    const [viewTypes, setViewTypes] = useState([
        { id: '1', label: 'Analysis', value: 'Analysis' },
        { id: '2', label: 'Biology', value: 'Biology' }
    ])
    const { id } = useParams<any>()
    const [activeViewType, setActiveViewType] = useState('2')
    const [currentTab, setCurrentTab] = useState({
        name: TABS[0].name
    })
    const loading: any = false
    return (
        <>
            {loading === undefined || loading === true ? (
                <Loader />
            ) : (
                <>
                    <Paper
                        className={classes.content}
                        style={{ background: '#e6e4dd !important', backgroundColor: '#e6e4dd !important' }}
                    >
                        <Grid
                            container
                            direction="column"
                            style={{
                                padding: '15px 20px',
                                position: 'sticky',
                                top: 0,
                                zIndex: 3,
                                background: '#e6e4dd !important',
                                backgroundColor: '#e6e4dd !important',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.12)'
                            }}
                        >
                            <Grid item xs={12} container>
                                <Grid item xs={8}>
                                    <HeaderNav {...headerNavProps} />
                                </Grid>
                                <Grid item xs={4} justifyContent="flex-end">
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end'
                                        }}
                                    >
                                            <Button style={{
                                                float: 'right',
                                                padding: '8px 0',
                                                width: '260px',
                                                marginLeft: 10,
                                                borderRadius: '0px'
                                            }}
                                                variant={'outlined'}
                                                color="secondary" onClick={(e: any) => { navigate(`/report/${id}`) }}
                                            >
                                                Generate Report
                                            </Button >
                                        <SecondaryTab
                                            taskTypes={viewTypes}
                                            activeTaskTypeTab={activeViewType}
                                            onTaskTypeTabChange={(type: any) => {
                                                setActiveViewType(type?.id)
                                            }}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        {activeViewType === '2' ? (
                            <>
                                <Grid
                                    container
                                    direction="column"
                                // style={{ padding: `${theme.spacing(1.5)}px 0px 0px ${theme.spacing(3.5)}px` }}
                                >
                                    <PlanKeyPoints />
                                </Grid>
                                <Grid container direction="column" style={{ padding: theme.spacing(2.5) }}>
                                    <Grid item xs={12} container>
                                        <Card
                                            className={clsx({
                                                [classes.mainCard]: true
                                            })}
                                            style={{ height: '77vh', maxHeight: '77vh' }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <img
                                                    style={{ height: '100%', width: '340px' }}
                                                    src={Artery}
                                                    alt="Artery"
                                                />
                                            </div>

                                            <div style={{ maxHeight: '100%', overflowY: 'scroll' }}>
                                                <Tab
                                                    currentTab={currentTab?.name}
                                                    customCardClass={classes.tab}
                                                    customClass={classes.tab}
                                                    listDetails={TABS}
                                                    onChange={(index: number, name: string) => {
                                                        setCurrentTab({ name })
                                                    }}
                                                />
                                                {currentTab?.name === 'Vessel' ? (
                                                    <InfoDetails
                                                    />
                                                ) : (
                                                    <InfoDetailsLesions
                                                    />
                                                )}
                                            </div>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </>
                        ) : (
                            <Grid
                                container
                                direction="row"
                                style={{
                                    display: 'flex'
                                }}
                            >
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    style={{
                                        width: 'fit-content'
                                    }}
                                >
                                    <Card
                                        className={clsx({
                                            [classes.mainCard2]: true
                                        })}
                                        style={{
                                            width: '464px',
                                            marginTop: '30px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '30px',
                                                gap: '30px'
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                style={{ color: 'white', fontWeight: 700, fontStyle: 'italic' }}
                                            >
                                                Atherosclerosis
                                                </Typography>
                                            <Typography variant="body1" style={{ color: '#c8d9ee' }}>
                                                View Details
                                                </Typography>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '20px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <div style={{ padding: '15px 10px' }}>
                                                    <Typography
                                                        variant="h3"
                                                        style={{
                                                            color: '#EF504D',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        144 mm<sup>3</sup>
                                                    </Typography>
                                                </div>
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        paddingTop: '12px'
                                                    }}
                                                >
                                                    Calcified Plaque
                                                    </Typography>
                                            </div>

                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <div style={{ padding: '15px 10px' }}>
                                                    <Typography
                                                        variant="h3"
                                                        style={{
                                                            color: '#EF504D',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        423 mm<sup>3</sup>
                                                    </Typography>
                                                </div>
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        paddingTop: '12px'
                                                    }}
                                                >
                                                    Non-Calcified Plaque
                                                    </Typography>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '20px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <div style={{ padding: '15px 10px' }}>
                                                    <Typography
                                                        variant="h3"
                                                        style={{
                                                            color: '#EF504D',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        21%
                                                        </Typography>
                                                </div>
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        paddingTop: '12px'
                                                    }}
                                                >
                                                    Percent Atheroma Volume
                                                    </Typography>
                                            </div>
                                        </div>
                                    </Card>

                                    {/* <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',gap:'10px'}}> */}

                                    <Card
                                        className={clsx({
                                            [classes.mainCard2]: true
                                        })}
                                        style={{ margin: '25px 0px' }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '30px'
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                style={{ color: 'white', fontWeight: 700, fontStyle: 'italic' }}
                                            >
                                                Stenosis
                                                </Typography>
                                            <Typography variant="body1" style={{ color: '#c8d9ee' }}>
                                                View Details
                                                </Typography>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '20px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <div style={{ padding: '15px 10px', border: '2px solid #EF504D' }}>
                                                    <Typography
                                                        variant="h3"
                                                        style={{
                                                            color: 'white',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        4
                                                        </Typography>
                                                </div>
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        paddingTop: '12px'
                                                    }}
                                                >
                                                    # of Severe Stenosis
                                                    </Typography>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <div style={{ padding: '15px 10px', border: '2px solid #fa9434' }}>
                                                    <Typography
                                                        variant="h3"
                                                        style={{
                                                            color: 'white',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        2
                                                        </Typography>
                                                </div>
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        paddingTop: '12px'
                                                    }}
                                                >
                                                    # of Moderate Stenosis
                                                    </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                    {/* </div>  */}

                                    <Card
                                        className={clsx({
                                            [classes.mainCard2]: true
                                        })}
                                        style={{
                                            width: '464px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '30px',
                                                gap: '30px'
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                style={{ color: 'white', fontWeight: 700, fontStyle: 'italic' }}
                                            >
                                                CAD-RADS
                                                </Typography>
                                            <Typography variant="body1" style={{ color: '#c8d9ee' }}>
                                                View Details
                                                </Typography>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '20px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <div style={{}}>
                                                    <Typography
                                                        variant="h3"
                                                        style={{
                                                            color: '#EF504D',
                                                            fontSize: '45px',
                                                            whiteSpace: 'nowrap',
                                                            fontWeight: 700
                                                        }}
                                                    >
                                                        4
                                                        </Typography>
                                                </div>
                                                <Typography
                                                    variant="h5"
                                                    style={{
                                                        color: 'white',
                                                        whiteSpace: 'nowrap',
                                                        paddingTop: '12px'
                                                    }}
                                                >
                                                    Severe Stenosis
                                                    </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    style={{
                                        width: 'fit-content'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            marginTop: '10px',
                                            paddingLeft: '50px'
                                        }}
                                    >
                                        <div>
                                            <DetailCard
                                                title={'Patient Details'}
                                                showTitleBorder={true}
                                                columnsPerRow={3}
                                                showBorder={true}
                                                columnsData={[
                                                    {
                                                        // key: 'cardMain-totalSpans',
                                                        label: 'Patient ID',
                                                        value: '17023' || '-'
                                                        // order: 1,
                                                    },
                                                    {
                                                        // key: 'cardMain-totalSpans',
                                                        label: 'Patient Name',
                                                        value: 'Raghav Verma' || '-'
                                                    },
                                                    {
                                                        // key: 'cardMain-totalSpans',
                                                        label: 'Age',
                                                        value: '44' || '-'
                                                        // order: 1,
                                                    }
                                                ]}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 'fit-content',
                                                padding: '10px',
                                                border: '1px solid #cbccd6',
                                                marginTop: '10px',
                                                alignSelf: 'flex-end'
                                            }}
                                        >
                                            <div>
                                                <Typography
                                                    variant="h5"
                                                    style={{ whiteSpace: 'nowrap', padding: '12px' }}
                                                >
                                                    Diameter Stenosis
                                                    </Typography>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-start',
                                                        width: '80px'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            background: '#35396c',
                                                            height: '25px'
                                                        }}
                                                    ></div>
                                                    <Typography
                                                        variant="subtitle1"
                                                        style={{
                                                            whiteSpace: 'nowrap',
                                                            paddingTop: '12px',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        0%
                                                        </Typography>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-start',
                                                        width: '80px'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            background: '#665490',
                                                            height: '25px'
                                                        }}
                                                    ></div>
                                                    <Typography
                                                        variant="subtitle1"
                                                        style={{
                                                            whiteSpace: 'nowrap',
                                                            paddingTop: '12px',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        1-24%
                                                        </Typography>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-start',
                                                        width: '80px'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            background: '#5174a1',
                                                            height: '25px'
                                                        }}
                                                    ></div>
                                                    <Typography
                                                        variant="subtitle1"
                                                        style={{
                                                            whiteSpace: 'nowrap',
                                                            paddingTop: '12px',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        25-49%
                                                        </Typography>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-start',
                                                        width: '80px'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            background: '#eda937',
                                                            height: '25px'
                                                        }}
                                                    ></div>
                                                    <Typography
                                                        variant="subtitle1"
                                                        style={{
                                                            whiteSpace: 'nowrap',
                                                            paddingTop: '12px',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        50-69%
                                                        </Typography>
                                                </div>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-start',
                                                        width: '80px'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '100%',
                                                            background: '#d62f52',
                                                            height: '25px'
                                                        }}
                                                    ></div>
                                                    <Typography
                                                        variant="subtitle1"
                                                        style={{
                                                            whiteSpace: 'nowrap',
                                                            paddingTop: '12px',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        {'>70%'}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src={HEARTSVG}
                                        style={{ paddingLeft: '70px', height: '750px' }}
                                        alt="React Logo"
                                    />
                                </Grid>
                            </Grid>
                        )}
                    </Paper>
                </>
            )}
        </>
    )
}

export default React.memo(PatientDetails)