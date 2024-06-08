import { Place } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" bgcolor="primary.main" color="white">
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Place />
              <Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography textAlign="center">
                    Avenida São Camilo, 1181 - Sala 07
                  </Typography>
                </Box>
                <Typography textAlign="center">
                  Avenida São Camilo, 1181 - Sala 07
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
