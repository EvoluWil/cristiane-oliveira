'use client';

import { Box } from '@mui/material';

export function HomeLocation() {
  return (
    <Box
      component="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.1159821721792!2d-46.83875453080653!3d-23.582527999876255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfabe479a458b5%3A0x8c01e1777312ae98!2sCristiane%20Oliveira%20Est%C3%A9tica%20Avan%C3%A7ada!5e0!3m2!1spt-BR!2sbr!4v1717852313214!5m2!1spt-BR!2sbr"
      width="100%"
      height={{ xs: 150, sm: 200, md: 300 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
