'use client';

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#CC858A',
      light: '#d69da1',
      dark: '#A36A6E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#492132',
      light: '#6d4d5a',
      dark: '#3a1a28',
      contrastText: '#fff',
    },
    success: {
      main: '#66BB6A',
      light: '#66BB6A',
      dark: '#388E3C',
      contrastText: '#fff',
    },
  },
});
