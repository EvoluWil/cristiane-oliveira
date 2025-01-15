'use client';

import { TypewriterEffect } from '@/components/layout/type-writer/type-writer';
import PromotionModal from '@/components/modals/promotion/promotion.modal';
import { FormatQuote } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export function HomeInitial() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Box
        display={{ md: 'none', xs: 'unset' }}
        position="absolute"
        zIndex={-1}
        mt={-2}
        width="100%"
        height="100%"
      >
        <Image
          src="/home-initial-background.png"
          alt="Cristiane Oliveira"
          width={300}
          height={300}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.4,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        />
      </Box>
      <Grid container component={Container}>
        <Grid item xs position={{ xs: 'relative', md: 'static' }}>
          <Box
            className="flex items-start justify-center animate-slideInFromLeft h-full flex-col"
            px={{ xs: 0.5, md: 0 }}
            minHeight="70vh"
          >
            <Typography
              variant="h2"
              color="secondary.main"
              fontWeight="bold"
              fontSize={{ xs: '1.2rem', md: '2rem' }}
              maxWidth={{ xs: '100%', md: '90%' }}
              sx={{
                '&:before': {
                  content: '""',
                },
              }}
            >
              <FormatQuote
                sx={{
                  mx: -1,
                  mt: -3,
                  transform: 'scaleX(-1)',
                  fontSize: { xs: '1.3rem', md: '2rem' },
                }}
              />{' '}
              <TypewriterEffect text="Porque beleza e autoestima não têm idade nem gênero" />{' '}
              <FormatQuote
                sx={{
                  mx: -1,
                  mt: -3,
                  fontSize: { xs: '1.3rem', md: '2rem' },
                }}
              />
            </Typography>
            <Typography
              color="secondary.main"
              mb={4}
              fontSize={{ xs: '0.9rem', md: '1.2rem' }}
            >
              Venha conhecer nossos serviços e se apaixonar por você mesmo!
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href="https://www.trinks.com/cristianeoliveira"
              target="_blank"
            >
              Agende seu horário
            </Button>
          </Box>
        </Grid>
        <Grid item md display={{ xs: 'none', md: 'block' }}>
          <Box
            mx="auto"
            my={4}
            bgcolor="primary.main"
            className="flex items-center justify-center  rounded-full animate-slideIn"
            width="35vw"
            height="35vw"
            overflow="hidden"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <Image
              src="/home-initial-background.png"
              alt="Cristiane Oliveira"
              width={300}
              height={300}
              style={{
                width: '100%',
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Image
        src="/waves.svg"
        alt="Cristiane Oliveira"
        width={160}
        height={160}
        style={{
          marginTop: '-16px',
          marginBottom: '-2px',
          position: 'relative',
          width: '100%',
        }}
      />
      <PromotionModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        videoUrl="/video-banner.mp4"
        title="CONHEÇA O LASER LAVIEEN"
        description={
          <Box display="flex" flexDirection="column" alignItems="center">
            O Laser Lavieen é um tratamento inovador que promove a renovação da
            pele, estimulando a produção de colágeno e elastina, melhorando a
            textura e a firmeza da pele.
            <Typography textAlign="center" mt={2}>
              Agende sua sessão agora mesmo e experimente a transformação da sua
              pele!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.trinks.com/cristianeoliveira"
              target="_blank"
              sx={{ mt: 2 }}
            >
              Agendar meu horário
            </Button>
          </Box>
        }
      />
    </>
  );
}
