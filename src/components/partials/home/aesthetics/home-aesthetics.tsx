import { ServiceCard } from '@/components/cards/services/service-card';
import { Box, Divider, Typography } from '@mui/material';

export function HomeAesthetics() {
  return (
    <Box
      bgcolor="primary.main"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h4" className="animate-zoomIn">
        Estética
      </Typography>
      <Divider
        sx={{ bgcolor: 'white', width: 180, height: 2, mb: 2 }}
        className="animate-increaseSizeFromCenter"
      />

      <Typography className="animate-fadeInUp" color="secondary.main" mb={4}>
        Transforme sua aparência, eleve sua confiança.
      </Typography>
      <Box my={4}>
        <ServiceCard />
        <ServiceCard inverter />
      </Box>
    </Box>
  );
}
