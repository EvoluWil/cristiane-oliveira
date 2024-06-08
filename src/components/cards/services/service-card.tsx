import { Service } from '@/types/services';
import { Box, Container } from '@mui/material';
import Image from 'next/image';

type ServiceCardProps = {
  inverter?: boolean;
  services: Service[];
  title: string;
  banner: string;
};

export function ServiceCard({
  services,
  title,
  banner,
  inverter = false,
}: ServiceCardProps) {
  const firstHalf = services.slice(0, services.length / 2);
  const secondHalf = services.slice(services.length / 2);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={inverter ? 'row-reverse' : 'row'}
      width="100vw"
      component={Container}
      gap={2}
    >
      <Box flex={0.3}>
        <Image
          src="/facial.png"
          alt="Cristiane Oliveira"
          width={300}
          height={300}
          style={{
            width: '100%',
            borderRadius: '16px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        />
      </Box>
      <Box flex={0.7}>
        A estética facial não só realça sua beleza natural, mas também melhora
        sua saúde e bem-estar. Tratamentos como microagulhamento, Laser Lavieen,
        hidratação facial e Ledterapia combatem rugas, manchas e acne, enquanto
        a limpeza de pele e drenagem linfática revitalizam e desintoxicam.
        Experimente nossos tratamentos personalizados e sinta-se mais jovem e
        confiante. Agende sua consulta hoje!
      </Box>
      {/* <Box flex={0.7}>
        <Typography variant="h6" gutterBottom textAlign="center">
          Estética Facial
        </Typography>

        <Box display="flex" gap={2}>
          <List>
            {firstHalf.map((service) => (
              <ListItem
                alignItems="flex-start"
                key={service?.title}
                disablePadding
              >
                <ListItemText
                  primary={service?.title}
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      fontSize="0.8rem"
                    >
                      {service?.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <List>
            {secondHalf.map((service) => (
              <ListItem
                alignItems="flex-start"
                key={service?.title}
                disablePadding
              >
                <ListItemText
                  primary={service?.title}
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      fontSize="0.8rem"
                      color="text.primary"
                    >
                      {service?.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box> */}
    </Box>
  );
}
