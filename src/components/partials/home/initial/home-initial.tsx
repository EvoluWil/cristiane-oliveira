import { TypewriterEffect } from '@/components/layout/type-writer/type-writer';
import { FormatQuote } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export function HomeInitial() {
  return (
    <Box>
      <Grid container component={Container}>
        <Grid item xs>
          <Box
            className="flex items-start justify-center animate-slideInFromLeft h-full flex-col"
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
                sx={{ mx: -1, mt: -3, fontSize: { xs: '1.3rem', md: '2rem' } }}
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
        width={150}
        height={150}
        style={{
          width: '100%',
        }}
      />
    </Box>
  );
}
