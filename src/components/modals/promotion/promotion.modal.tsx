import { Close } from '@mui/icons-material';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';

interface PromotionModalProps {
  open: boolean;
  handleClose: () => void;
  videoUrl: string;
  title: string;
  description: string | JSX.Element;
}

const PromotionModal: React.FC<PromotionModalProps> = ({
  open,
  handleClose,
  videoUrl,
  title,
  description,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw',
          maxWidth: 400,
          maxHeight: '90vh',
          bgcolor: 'primary.light',
          boxShadow: 24,
          borderRadius: 2,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            cursor: 'pointer',
            zIndex: 1,
            color: 'white',
            border: '1px solid white',
          }}
        >
          <Close />
        </IconButton>

        <video
          style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
          height={300}
          controls
          autoPlay
          poster="/poster.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
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
          {title}
        </Typography>
        <Box width={120} height={2} bgcolor="white" mx="auto" mb={2} />
        <Typography p={2}>{description}</Typography>
      </Box>
    </Modal>
  );
};

export default PromotionModal;
