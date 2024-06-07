import {
  CrisisAlert,
  InterpreterMode,
  Newspaper,
  OndemandVideo,
  People,
} from '@mui/icons-material';

export type Route = {
  id: string;
  icon?: JSX.Element;
  path: string;
  subRoutes?: SubRoute[];
};

export type SubRoute = {
  id: string;
  path: string;
};

export const routes: Route[] = [
  {
    id: 'INÍCIO',
    icon: <People sx={{ color: 'white' }} />,
    path: '/',
  },
  {
    id: 'ESTÉTICA',
    icon: <InterpreterMode sx={{ color: 'white' }} />,
    path: '/admin/instructors',
  },
  {
    id: 'SAÚDE',
    icon: <InterpreterMode sx={{ color: 'white' }} />,
    path: '/admin/instructors',
  },
  {
    id: 'BELEZA',
    icon: <OndemandVideo sx={{ color: 'white' }} />,
    path: '/admin/classes',
  },
  {
    id: 'BEM-ESTAR',
    icon: <Newspaper sx={{ color: 'white' }} />,
    path: '/admin/blogs',
  },
  {
    id: 'CONTATO',
    icon: <CrisisAlert sx={{ color: 'white' }} />,
    path: '/admin/objectives',
  },
];
