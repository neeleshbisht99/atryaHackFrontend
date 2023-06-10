// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const admitPatient = {
  id: 'admitPatient',
  title: 'Admit Patient',
  type: 'group',
  children: [
    {
      id: 'admit',
      title: 'Admit Patient',
      type: 'item',
      url: '/admit',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
}

export default admitPatient;
