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
    path: '/#',
  },
  {
    id: 'ESTÉTICA',
    icon: <InterpreterMode sx={{ color: 'white' }} />,
    path: '/#estetica',
  },
  {
    id: 'SAÚDE',
    icon: <InterpreterMode sx={{ color: 'white' }} />,
    path: '/#',
  },
  {
    id: 'BELEZA',
    icon: <OndemandVideo sx={{ color: 'white' }} />,
    path: '/#',
  },
  {
    id: 'BEM-ESTAR',
    icon: <Newspaper sx={{ color: 'white' }} />,
    path: '/#',
  },
  {
    id: 'CONTATO',
    icon: <CrisisAlert sx={{ color: 'white' }} />,
    path: '/#contato',
  },
];
