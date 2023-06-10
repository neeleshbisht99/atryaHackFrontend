// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const patientStudies = {
  id: 'patientStudies',
  title: 'Studies',
  type: 'group',
  children: [
    {
      id: 'analysis',
      title: 'Analysis',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
}

export default patientStudies;
