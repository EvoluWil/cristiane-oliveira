import { ImageCarousel } from '@/components/layout/image-carousel/image-carousel';
import { Service } from '@/types/services';
import { CheckCircle } from '@mui/icons-material';
import { Box, List, ListItem, Modal, Typography } from '@mui/material';
import React from 'react';

type ServiceModalProps = {
  open: boolean;
  handleClose: () => void;
  service: Service | null;
};

const ServiceModal: React.FC<ServiceModalProps> = ({
  open,
  handleClose,
  service,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'primary.light',
          boxShadow: 24,
          borderRadius: 4,
          maxHeight: '90vh',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <ImageCarousel images={service?.images || []} />

        <Typography
          variant="h6"
          component="h2"
          position="relative"
          mt={-5.8}
          zIndex={1}
          color="white"
          textAlign="center"
          pt={2}
          sx={{
            backgroundImage:
              'linear-gradient(to bottom, transparent, rgba(214,157,161) 100%)',
          }}
        >
          {service?.title}
        </Typography>
        <Box width={120} height={2} bgcolor="white" mx="auto" mb={2} />

        <Typography
          position="relative"
          mt={-0.1}
          variant="body2"
          color="white"
          py={0.5}
          px={2}
          textAlign="center"
        >
          {service?.subtitle}
        </Typography>

        {service?.descriptions?.map((description, index) => (
          <Typography
            key={index}
            position="relative"
            variant="caption"
            color="white"
            component="p"
            py={0.5}
            px={2}
          >
            {description}
          </Typography>
        ))}
        {service?.advantages?.length ? (
          <>
            <Typography
              variant="h6"
              component="h2"
              color="white"
              textAlign="center"
              pt={2}
            >
              VANTAGENS
            </Typography>
            <Box width={120} height={2} bgcolor="white" mx="auto" mb={2} />

            <List
              style={{
                listStyle: 'disc',
                listStyleType: 'disc',
              }}
            >
              {service?.advantages?.map((advantage, index) => (
                <ListItem
                  key={index}
                  sx={{ py: 0.5, px: 2, listStyleType: 'disc' }}
                  style={{
                    listStyle: 'disc',
                    listStyleType: 'disc',
                  }}
                >
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <CheckCircle color="success" />
                    <Typography
                      position="relative"
                      variant="caption"
                      color="white"
                      component="p"
                    >
                      {advantage}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </>
        ) : (
          <Box width="90%" height={2} bgcolor="white" mx="auto" my={2} />
        )}

        <Typography
          position="relative"
          mt={-0.1}
          variant="body2"
          color="white"
          py={0.5}
          px={2}
          textAlign="center"
          mb={2}
        >
          {service?.footer}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ServiceModal;
