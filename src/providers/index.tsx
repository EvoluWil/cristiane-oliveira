'use client';

import { theme } from '@/global/theme';
import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export function AppProviders({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
