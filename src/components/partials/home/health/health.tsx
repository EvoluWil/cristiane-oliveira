'use client';

import { ImageCarousel } from '@/components/layout/image-carousel/image-carousel';
import ServiceModal from '@/components/modals/service/service.modal';
import { HEALTH_SERVICES } from '@/constants/services/health';
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

export function HomeHealth() {
  const [selectedService, setSelectedService] = useState<null | Service>(null);

  const handleSelectService = (service: Service | null) => {
    setSelectedService(service);
  };

  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isXS = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      bgcolor="background.paper"
      display="flex"
      color="primary.main"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={4}
      position="relative"
    >
      <Box id="health" position="absolute" top={-80} />

      <Typography
        variant="h4"
        className="animate-zoomIn"
        fontSize={{ xs: '1.5rem', md: '2rem' }}
      >
        Saúde e Bem-Estar
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
        Experimente cuidados especiais para promover sua saúde e bem-estar,
        priorizando segurança e qualidade em cada detalhe. <br />
        Proporcione-se momentos de relaxamento e renovação com técnicas
        avançadas, realizadas por profissionais qualificados e com resultados
        confiáveis
      </Typography>

      <Container>
        <ImageList
          cols={isXS ? 1 : isSM ? 3 : 4}
          gap={32}
          variant="standard"
          sx={{ pb: 2 }}
          className="animate-slideIn"
        >
          {HEALTH_SERVICES.map((item) => (
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
