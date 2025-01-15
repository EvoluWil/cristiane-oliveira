'use client';
import { Footer } from '@/components/display/footer/footer';
import { Header } from '@/components/display/header/header';
import WhatsAppButton from '@/components/layout/whatsapp/whatsapp';
import { HomeAesthetics } from '@/components/partials/home/aesthetics/home-aesthetics';
import { HomeBeauty } from '@/components/partials/home/beauty/beauty';
import { HomeHealth } from '@/components/partials/home/health/health';
import { HomeInitial } from '@/components/partials/home/initial/home-initial';
import { HomeLocation } from '@/components/partials/home/location/location';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setStarted(true);
  }, []);

  if (!started) {
    return null;
  }

  return (
    <Box>
      <Header />
      <Box mt={10}>
        <HomeInitial />
        <HomeAesthetics />
        <HomeBeauty />
        <HomeHealth />
        <HomeLocation />
      </Box>
      <WhatsAppButton />
      <Footer />
    </Box>
  );
}
