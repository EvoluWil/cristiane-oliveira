import { HomeAesthetics } from '@/components/partials/home/aesthetics/home-aesthetics';
import { HomeInitial } from '@/components/partials/home/initial/home-initial';
import { HomeLocation } from '@/components/partials/home/location/location';
import { Box } from '@mui/material';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  minimumScale: 1.0,
};

export default function Home() {
  return (
    <Box>
      <HomeInitial />
      <HomeAesthetics />
      <HomeLocation />
    </Box>
  );
}
