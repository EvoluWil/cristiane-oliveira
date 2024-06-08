'use client';

import { BODY_SERVICES } from '@/constants/services/body';
import { FACIAL_SERVICES } from '@/constants/services/facial';
import {
  Box,
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

export function HomeAesthetics() {
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
      >
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
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              className="animate-fadeInUp"
              color="secondary.main"
              mb={4}
              maxWidth={800}
              textAlign="center"
              fontSize={{ xs: '0.9rem', md: '1.2rem' }}
            >
              A estética facial não só realça sua beleza natural, mas também
              melhora sua saúde e bem-estar. Tratamentos como microagulhamento,
              Laser Lavieen, hidratação facial e Ledterapia combatem rugas,
              manchas e acne, enquanto a limpeza de pele e drenagem linfática
              revitalizam e desintoxicam. Experimente nossos tratamentos
              personalizados e sinta-se mais jovem e confiante. Agende sua
              consulta hoje!
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
                key={item.title}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: 4,
                }}
              >
                <Image
                  src="/facial.png"
                  alt={item.title}
                  width={248}
                  height={248}
                  layout="responsive"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={
                    <Typography variant="caption" display="block" pt={1}>
                      {item.description}
                    </Typography>
                  }
                  position="below"
                  sx={{
                    color: 'secondary.main',
                    px: 1,
                    '*': {
                      whiteSpace: 'normal !important',
                    },
                  }}
                />
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
          Estética Facial
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
              fontSize={{ xs: '0.9rem', md: '1.2rem' }}
            >
              Experimente a estética corporal para realçar sua beleza e
              bem-estar. Nossos tratamentos, desde a drenagem linfática até o
              peeling, promovem a saúde da pele, tonificação muscular e
              relaxamento. Cuide do seu corpo com técnicas avançadas e
              resultados visíveis. Agende sua consulta e descubra uma nova você!
            </Typography>
          </Box>
          <ImageList
            cols={isXS ? 1 : isSM ? 3 : 4}
            gap={32}
            variant="standard"
            sx={{ pb: 2 }}
            className="animate-slideInFromLeft"
          >
            {BODY_SERVICES.map((item) => (
              <ImageListItem
                key={item.title}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: 4,
                }}
              >
                <Image
                  src="/facial.png"
                  alt={item.title}
                  width={248}
                  height={248}
                  layout="responsive"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={
                    <Typography variant="caption" display="block" pt={1}>
                      {item.description}
                    </Typography>
                  }
                  position="below"
                  sx={{
                    color: 'secondary.main',
                    px: 1,
                    '*': {
                      whiteSpace: 'normal !important',
                    },
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
    </>
  );
}
