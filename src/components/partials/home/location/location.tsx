'use client';

import { Box, Divider, Typography } from '@mui/material';

export function HomeLocation() {
  return (
    <Box
      bgcolor="primary.main"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={4}
    >
      <Typography
        variant="h4"
        className="animate-zoomIn"
        fontSize={{ xs: '1.5rem', md: '2rem' }}
      >
        Contato
      </Typography>
      <Divider
        sx={{ bgcolor: 'white', width: 280, height: 2, mb: 2 }}
        className="animate-increaseSizeFromCenter"
      />
      <Typography
        className="animate-fadeInUp"
        color="secondary.main"
        mb={4}
        maxWidth={800}
        px={4}
        textAlign="center"
        fontSize={{ xs: '0.9rem', md: '1rem' }}
      >
        Estamos localizados no coração da Granja Viana, em Cotia, São Paulo.
        Venha nos visitar e tenha um atendimento de excelência, com máximo
        conforto e qualidade nos serviços prestados.
      </Typography>

      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.1159821721792!2d-46.83875453080653!3d-23.582527999876255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfabe479a458b5%3A0x8c01e1777312ae98!2sCristiane%20Oliveira%20Est%C3%A9tica%20Avan%C3%A7ada!5e0!3m2!1spt-BR!2sbr!4v1717852313214!5m2!1spt-BR!2sbr"
        width="92%"
        height={{ xs: 150, sm: 200, md: 300 }}
        style={{
          border: 0,
          borderRadius: 10,
          maxWidth: 1280,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
