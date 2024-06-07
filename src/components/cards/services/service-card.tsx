import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';

type ServiceCardProps = {
  inverter?: boolean;
};

export function ServiceCard({ inverter = false }: ServiceCardProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={inverter ? 'row-reverse' : 'row'}
      width="100vw"
      component={Container}
    >
      <Box flex={0.3}>
        <Image
          src="/facial.png"
          alt="Cristiane Oliveira"
          width={300}
          height={300}
          style={{
            width: '100%',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        />
      </Box>
      <Box flex={0.7}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Limpeza de pele"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Para peles oleosas, secas e mistas.
                </Typography>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Limpeza de pele"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Para peles oleosas, secas e mistas.
                </Typography>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Limpeza de pele"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Para peles oleosas, secas e mistas.
                </Typography>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Limpeza de pele"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Para peles oleosas, secas e mistas.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
