'use client';
import { WhatsApp } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  alpha,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialLinksPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(180deg, ${alpha('#d69da1', 1)}, ${alpha(
          '#d69da1',
          0.4,
        )})`,
        p: 2,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            borderRadius: 4,
            backgroundColor: 'white',
            boxShadow: `0 8px 30px ${alpha('#000000', 0.15)}`,
          }}
        >
          <Box display="flex" justifyContent="center" mb={2}>
            <Image
              src="/logo.svg"
              alt="Yoga in House"
              width={165}
              height={44}
            />
          </Box>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Estética Avançada • Bem-estar & Beleza
          </Typography>

          <Stack spacing={2}>
            <Button
              fullWidth
              component={Link}
              href="https://cristianeoliveira.com.br"
              variant="contained"
              size="large"
            >
              🌐 Acesse o site
            </Button>

            <Button
              fullWidth
              component={Link}
              href="https://www.trinks.com/cristianeoliveira"
              variant="contained"
              size="large"
            >
              📅 Agendar agora
            </Button>
            <Button
              fullWidth
              component={Link}
              href="https://www.instagram.com/estetica._crisoliveira"
              variant="contained"
              size="large"
            >
              <Image
                src="/icons-instagram.svg"
                alt="@crisoliveiraesteticaebeleza"
                width={20}
                height={20}
                layout="fixed"
                className="mr-2"
              />
              Instagram
            </Button>
            <Button
              fullWidth
              component={Link}
              href="https://wa.me/5511939275814"
              variant="contained"
              color="success"
              size="large"
            >
              <WhatsApp
                sx={{
                  width: 20,
                  height: 20,
                  opacity: 0.8,
                  mr: 1,
                }}
              />
              WhatsApp
            </Button>

            <Button
              fullWidth
              component="a"
              href="tel:+5511939275814"
              variant="outlined"
              size="large"
            >
              ☎️ Ligar
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
