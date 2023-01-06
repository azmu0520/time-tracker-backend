import Generic from '../components/Generic';
import HomePage from '../pages/Home';

export const data = [
  {
    id: 0,
    title: 'Home ',
    path: '/home',
    Component: HomePage,
    hidden: true,
  },
  {
    id: 1,
    title: 'Find Jobs ',
    path: '/find-jobs',
    Component: Generic,
  },
  {
    id: 2,
    title: 'Employers Details',
    path: '/employers-details',
    Component: Generic,
  },
  {
    id: 3,
    title: 'Candidates',
    path: '/candidates',
    Component: Generic,
  },
  {
    id: 4,
    title: 'Blog',
    path: '/Blog',
    Component: Generic,
  },
];
