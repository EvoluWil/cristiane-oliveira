'use client';

import { AnimatedLink } from '@/components/layout/animated-link/animated-link';
import { routes } from '@/routes/routes';
import { Box, Button, Container, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const [isNavOnTop, setIsNavOnTop] = useState(true);
  const pathname = usePathname();

  const match = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsNavOnTop(true);
      } else {
        setIsNavOnTop(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Box color="white" position="relative">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          py: '8px !important',
          bgcolor: isNavOnTop ? 'primary' : 'transparent',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box
          sx={{
            backdropFilter: 'blur(10px)',
          }}
          width="100%"
          height="100%"
          bgcolor="transparent"
          position="absolute"
          mt={-1}
        />
        <Container maxWidth="lg">
          <Toolbar sx={{ px: '0 !important' }}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item>
                {match ? (
                  <Box display="flex" alignItems="center"></Box>
                ) : (
                  <Image
                    src={isNavOnTop ? '/logo-white.svg' : '/logo.svg'}
                    alt="Yoga in House"
                    width={165}
                    height={44}
                  />
                )}
              </Grid>
              <Grid item xs>
                <Box ml="auto">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {match ? (
                      <Image
                        src={isNavOnTop ? '/logo-white.svg' : '/logo.svg'}
                        alt="Yoga in House"
                        width={112.5}
                        height={30}
                      />
                    ) : (
                      <>
                        {routes.map((item) => (
                          <Box key={item.id}>
                            <AnimatedLink
                              isontop={isNavOnTop ? 1 : 0}
                              fontSize={12}
                              className={
                                pathname === item.path ? 'active' : 'inative'
                              }
                              href={item.path}
                            >
                              {item.id}
                            </AnimatedLink>
                          </Box>
                        ))}
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
              {!match && (
                <Grid item>
                  <Button
                    variant={isNavOnTop ? 'outlined' : 'contained'}
                    color={isNavOnTop ? 'secondary' : 'primary'}
                    href="https://www.trinks.com/cristianeoliveira"
                    target="_blank"
                  >
                    Agende seu horário
                  </Button>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
