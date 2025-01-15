import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

interface PromotionModalProps {
  open: boolean;
  handleClose: () => void;
  imageUrl: string;
  title: string;
  description: string | JSX.Element;
}

const PromotionModal: React.FC<PromotionModalProps> = ({
  open,
  handleClose,
  imageUrl,
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
        <video
          style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
          height={300}
          controls
          autoPlay
          poster="/poster.jpg"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/yoga-in-house.appspot.com/o/cris-oliveira_FT56mcTL%20(1).mp4?alt=media&token=2d7304bf-5e84-46a9-a2ba-335504d322f7"
            type="video/mp4"
          />
        </video>
        {/* <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
        /> */}
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
