import { HomeAesthetics } from '@/components/partials/home/aesthetics/home-aesthetics';
import { HomeInitial } from '@/components/partials/home/initial/home-initial';
import { HomeLocation } from '@/components/partials/home/location/location';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <HomeInitial />
      <HomeAesthetics />
      <HomeLocation />
    </Box>
  );
}
