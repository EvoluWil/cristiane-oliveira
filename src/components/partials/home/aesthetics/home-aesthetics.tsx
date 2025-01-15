'use client';

import { ImageCarousel } from '@/components/layout/image-carousel/image-carousel';
import ServiceModal from '@/components/modals/service/service.modal';
import { BODY_SERVICES } from '@/constants/services/body';
import { FACIAL_SERVICES } from '@/constants/services/facial';
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
import Image from 'next/image';
import { useState } from 'react';

export function HomeAesthetics() {
  const [selectedService, setSelectedService] = useState<null | Service>(null);

  const handleSelectService = (service: Service | null) => {
    setSelectedService(service);
  };

  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isXS = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return (
    <>
      <Box
        bgcolor="primary.main"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
      >
        <Box id="estetica" position="absolute" top={-120} />
        <Typography
          variant="h4"
          className="animate-zoomIn"
          fontSize={{ xs: '1.5rem', md: '2rem' }}
        >
          Estética Facial
        </Typography>
        <Divider
          sx={{ bgcolor: 'white', width: 280, height: 2, mb: 2 }}
          className="animate-increaseSizeFromCenter"
        />
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="primary.main"
          >
            <Typography
              className="animate-fadeInUp"
              color="secondary.main"
              mb={4}
              maxWidth={800}
              textAlign="center"
              fontSize={{ xs: '0.8rem', md: '1rem' }}
            >
              A estética facial não só realça sua beleza natural, mas também
              melhora sua saúde e bem-estar.
              <br />
              Experimente nossos tratamentos personalizados e sinta-se mais
              jovem e confiante.
            </Typography>
          </Box>
          <ImageList
            cols={isXS ? 1 : isSM ? 3 : 4}
            gap={32}
            variant="standard"
            sx={{ pb: 2 }}
            className="animate-slideIn"
          >
            {FACIAL_SERVICES.map((item) => (
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
                  sx={{ color: 'white', fontSize: '0.8rem' }}
                >
                  Saiba mais
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>

      <Image
        src="/waves.svg"
        alt="Cristiane Oliveira"
        width={300}
        height={300}
        style={{
          width: '100%',
          transform: 'rotate(180deg)',
          marginTop: '-10px',
        }}
      />

      <Box
        color="primary.main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mb={4}
        mt={8}
      >
        <Typography
          variant="h4"
          className="animate-zoomIn"
          fontSize={{ xs: '1.5rem', md: '2rem' }}
        >
          Estética Corporal
        </Typography>
        <Divider
          sx={{ bgcolor: 'primary.main', width: 280, height: 2, mb: 2 }}
          className="animate-increaseSizeFromCenter"
        />
        <Container>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              className="animate-fadeInUp"
              color="secondary.main"
              mb={4}
              maxWidth={800}
              textAlign="center"
              fontSize={{ xs: '0.8rem', md: '1rem' }}
            >
              Experimente a estética corporal para realçar sua beleza e
              bem-estar.
              <br /> Cuide do seu corpo com técnicas avançadas e resultados
              visíveis.
            </Typography>
          </Box>
          <ImageList
            cols={isXS ? 1 : isSM ? 3 : 4}
            gap={32}
            variant="standard"
            sx={{ pb: 2 }}
            className="animate-slideIn"
          >
            {BODY_SERVICES.map((item) => (
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
      </Box>
      <ServiceModal
        open={!!selectedService}
        handleClose={() => handleSelectService(null)}
        service={selectedService}
      />
    </>
  );
}
