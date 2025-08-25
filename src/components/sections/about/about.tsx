import {
  alpha,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

type AboutProps = {
  history: string | React.ReactNode;
  managerName?: string;
  managerImage?: string;
  managerRole?: string;
  title?: string;
  className?: string;
};

const About: React.FC<AboutProps> = ({
  history,
  managerName = 'Cristiane Oliveira',
  managerImage,
  managerRole = 'Gestora • Administração',
  title = 'Nossa História',
  className,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      className={className}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: -80,
          top: -80,
          width: 260,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.light,
            0.35,
          )}, ${alpha(theme.palette.secondary.light, 0.2)})`,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          // garante texto à esquerda e imagem à direita no desktop
        >
          {/* Texto / História */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                backdropFilter: 'blur(6px)',
                transition: 'transform .25s ease, box-shadow .25s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  mb: 2,
                  color: 'secondary.main',
                }}
              >
                {title}
              </Typography>

              <Divider
                sx={{
                  width: 64,
                  height: 4,
                  borderRadius: 2,
                  mb: 3,
                  backgroundColor: 'secondary.main',
                }}
              />

              {typeof history === 'string' ? (
                history
                  .trim()
                  .split(/\n{2,}/)
                  .map((para, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      paragraph
                      sx={{
                        lineHeight: 1.8,
                        color: 'secondary.main',
                      }}
                    >
                      {para}
                    </Typography>
                  ))
              ) : (
                <Box
                  sx={{
                    '& p': {
                      lineHeight: 1.8,
                      color: theme.palette.text.secondary,
                    },
                  }}
                >
                  {history}
                </Box>
              )}
            </Box>
          </Grid>

          {/* Imagem / Gestora */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: -12,
                  borderRadius: '28px',
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  p: 1.5,
                  borderRadius: '28px',
                }}
              >
                <Image
                  src={managerImage as string}
                  alt={managerName}
                  width={400}
                  height={500}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
