'use client';

import { ImageCarousel } from '@/components/layout/image-carousel/image-carousel';
import ServiceModal from '@/components/modals/service/service.modal';
import { BEAUTY_SERVICES } from '@/constants/services/beauty';
import { Service } from '@/types/services';
import {
  Box,
  Button,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';

export function HomeBeauty() {
  const [selectedService, setSelectedService] = useState<null | Service>(null);

  const handleSelectService = (service: Service | null) => {
    setSelectedService(service);
  };

  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isXS = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      bgcolor="primary.main"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={4}
      position="relative"
    >
      <Box id="beauty" position="absolute" top={-80} />

      <Typography
        variant="h4"
        className="animate-zoomIn"
        fontSize={{ xs: '1.5rem', md: '2rem' }}
      >
        Beleza
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
        Experimente cuidados especiais para mãos, pés e cabelo, realçando sua
        beleza e autoestima. <br />
        Proporcione-se momentos de cuidado e renovação com técnicas avançadas e
        resultados impecáveis.
      </Typography>

      <Container>
        <ImageList
          cols={isXS ? 1 : isSM ? 3 : 4}
          gap={32}
          variant="standard"
          sx={{ pb: 2 }}
          className="animate-slideIn"
        >
          {BEAUTY_SERVICES.map((item) => (
            <ImageListItem
              onClick={() => handleSelectService(item)}
              key={item.title}
              sx={{
                bgcolor: 'rgba(214,157,161, 0.5)',
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: 4,
              }}
            >
              <ImageCarousel images={item.images} />
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                position="below"
                sx={{
                  color: 'secondary.main',
                  px: 1,
                  '*': {
                    whiteSpace: 'normal !important',
                  },
                }}
              />
              <Button
                variant="text"
                sx={{ color: 'white', fontSize: '0.8rem', mt: 'auto' }}
              >
                Saiba mais
              </Button>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <ServiceModal
        open={!!selectedService}
        handleClose={() => handleSelectService(null)}
        service={selectedService}
      />
    </Box>
  );
}