'use client';
import { Footer } from '@/components/display/footer/footer';
import { Header } from '@/components/display/header/header';
import WhatsAppButton from '@/components/layout/whatsapp/whatsapp';
import { HomeAesthetics } from '@/components/partials/home/aesthetics/home-aesthetics';
import { HomeBeauty } from '@/components/partials/home/beauty/beauty';
import { HomeHealth } from '@/components/partials/home/health/health';
import { LavieenHighlights } from '@/components/partials/home/highlight/highlight';
import { HomeInitial } from '@/components/partials/home/initial/home-initial';
import { HomeLocation } from '@/components/partials/home/location/location';
import About from '@/components/sections/about/about';
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
        <Box
          sx={{
            background: 'linear-gradient(#CC858A, white, #CC858A)',
          }}
        >
          <About
            history={`Com mais de 20 anos de experiência no mercado de estética e beleza, a Cristiane Oliveira se destaca por sua dedicação e paixão em transformar vidas através do cuidado pessoal. Sua jornada começou com uma visão clara: oferecer serviços de alta qualidade que promovam o bem-estar e a autoestima de seus clientes.`}
            managerImage="/cris_oliveira.png"
            managerName="Cristiane Oliveira"
          />
          <LavieenHighlights />
        </Box>
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
