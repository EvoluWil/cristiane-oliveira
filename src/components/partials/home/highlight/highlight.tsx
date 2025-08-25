'use client';

import {
  alpha,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';

export const LavieenHighlights: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      id="destaques-lavieen"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 10 },
      }}
    >
      {/* brilho decorativo */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: -100,
          bottom: -120,
          width: 320,
          height: 320,
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* VÍDEO – esquerda no desktop */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box display="flex" justifyContent="center">
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                }}
              >
                <video
                  controls
                  poster="/videos/poster.jpg" // coloque o arquivo em /public/posters/lavieen.jpg (opcional)
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 600,
                    maxWidth: 400,
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: 12,
                  }}
                >
                  <source src="/videos/lavieen.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </Box>
            </Box>
          </Grid>

          {/* CONTEÚDO – direita no desktop */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h3"
                component="h2"
                color="secondary.main"
                sx={{ fontWeight: 800, letterSpacing: '-0.02em', mt: 1 }}
              >
                Lavieen — tecnologia a favor da sua pele
              </Typography>
            </Box>

            <Typography
              color="secondary.main"
              variant="body1"
              color="secondary.main"
              sx={{ mb: 2 }}
            >
              O Lavieen é uma plataforma de laser utilizada em protocolos
              personalizados para promover melhora gradual da aparência e da
              uniformidade da pele, sempre mediante avaliação profissional.
              Nossos cuidados incluem orientação pré e pós-sessão para maximizar
              conforto e segurança.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1.2} sx={{ mb: 3 }}>
              <Chip label="Protocolos personalizados" variant="outlined" />
              <Chip label="Conforto no atendimento" variant="outlined" />
              <Chip label="Acompanhamento clínico" variant="outlined" />
              <Chip label="Evolução progressiva" variant="outlined" />
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    height: '100%',
                    border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                    transition: 'transform .2s ease, box-shadow .2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    mb={0.5}
                    color="secondary.main"
                  >
                    Planejamento Individual
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avaliação antes de cada sessão para ajustar parâmetros às
                    necessidades da sua pele.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    height: '100%',
                    border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                    transition: 'transform .2s ease, box-shadow .2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    mb={0.5}
                    color="secondary.main"
                  >
                    Orientações de Cuidado
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Protocolos de pré e pós-tratamento para conforto e melhor
                    adesão às recomendações.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Stack direction="row" spacing={1.5}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                href="https://www.trinks.com/cristianeoliveira"
                target="_blank"
              >
                Agendar avaliação
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
