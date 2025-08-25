import { Copyright } from '@/components/layout/copyright/copyright';
import { Call, Place, WhatsApp } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const Footer = () => {
  return (
    <Box component="footer" bgcolor="primary.main" color="secondary">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" textAlign="center" color="white" mb={1}>
              Contato
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <Place />
              <Box>
                <Typography
                  component="a"
                  display="block"
                  href="https://www.google.com/maps/dir//Cristiane+Oliveira+Est%C3%A9tica+Avan%C3%A7ada+-+Av.+S%C3%A3o+Camilo,+1181+-+Sala+07+-+Portal+da+Granja,+Cotia+-+SP,+06709-150/@-23.582528,-46.8387545,18.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cfabe479a458b5:0x8c01e1777312ae98!2m2!1d-46.838321!2d-23.5825854!3e0?entry=ttu"
                  target="_blank"
                  whiteSpace="nowrap"
                >
                  Avenida São Camilo, 1181 - Sala 07
                </Typography>
                <Typography
                  component="a"
                  display="block"
                  href="https://www.google.com/maps/dir//Cristiane+Oliveira+Est%C3%A9tica+Avan%C3%A7ada+-+Av.+S%C3%A3o+Camilo,+1181+-+Sala+07+-+Portal+da+Granja,+Cotia+-+SP,+06709-150/@-23.582528,-46.8387545,18.75z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cfabe479a458b5:0x8c01e1777312ae98!2m2!1d-46.838321!2d-23.5825854!3e0?entry=ttu"
                  target="_blank"
                  whiteSpace="nowrap"
                >
                  Granja Viana - Cotia - SP - 06709-150
                </Typography>
                <Typography
                  component="a"
                  display="block"
                  href="tel:+5511939275814"
                  target="_blank"
                >
                  <Call
                    sx={{
                      fontSize: 20,
                      borderColor: 'secondary.main',
                      borderWidth: 1.5,
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      padding: 0.3,
                      mr: 1,
                    }}
                  />
                  (11) 9 3927-5814
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Image
                src="/logo-white.svg"
                alt="Cristiane Oliveira"
                width={230}
                height={60}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" textAlign="center" color="white" mb={1}>
              Siga-nos
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Box
                component="a"
                href="https://www.facebook.com/crisoliveiraesteticaebeleza?mibextid=ZbWKwL"
                target="_blank"
              >
                <Image
                  src="/icons-facebook.svg"
                  alt="@crisoliveiraesteticaebeleza"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </Box>
              <Box
                component="a"
                href="https://www.instagram.com/estetica._crisoliveira/"
                target="_blank"
              >
                <Image
                  src="/icons-instagram.svg"
                  alt="@estetica._crisoliveira"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </Box>
              <Box
                component="a"
                href="https://www.trinks.com/cristianeoliveira"
                target="_blank"
              >
                <Image
                  src="/icons-trinks.svg"
                  alt="@cristianeoliveira"
                  width={45}
                  height={45}
                  layout="fixed"
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #492132',
                    borderWidth: 2,
                  }}
                />
              </Box>
              <Box
                component="a"
                href="https://api.whatsapp.com/send/?phone=5511939275814"
                target="_blank"
              >
                <Box
                  style={{
                    borderRadius: '6px',
                    border: '1px solid #492132',
                    borderWidth: 2,
                  }}
                >
                  <WhatsApp
                    sx={{
                      width: 42,
                      height: 42,
                      opacity: 0.8,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box pb={1} pt={4}>
        <Copyright />
      </Box>
    </Box>
  );
};
