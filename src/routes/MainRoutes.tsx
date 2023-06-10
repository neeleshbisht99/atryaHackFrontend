import React from 'react';
import { lazy } from 'react';

// project imports
import MainLayout from 'src/layout/MainLayout';
import Loadable from 'src/ui-component/Loadable';

// main routing
const PatientList = Loadable(lazy(() => import('src/views/studies/patientList')));

const PatientDetail = Loadable(lazy(() => import('src/views/studies/patientDetail')));

const AdmitPatient = Loadable(lazy(() => import('src/views/admitPatient')));
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('src/views/dashboard/Default')));


// utilities routing
const UtilsTypography = Loadable(lazy(() => import('src/views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('src/views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('src/views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('src/views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('src/views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('src/views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PatientList />
    },
    {
      path: '/admit',
      element: <AdmitPatient />
    },
    {
      path: '/patient/:id',
      element: <PatientDetail />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
