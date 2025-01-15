/* eslint-disable @next/next/no-img-element */
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import './image-carousel.css';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e: any) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="carousel-container">
      {images?.length > 1 && (
        <IconButton onClick={prevSlide} className="carousel-button prev-button">
          <ArrowBackIos />
        </IconButton>
      )}
      <div className="carousel-images">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`carousel-image`}
        />
      </div>
      {images?.length > 1 && (
        <IconButton onClick={nextSlide} className="carousel-button next-button">
          <ArrowForwardIos />
        </IconButton>
      )}
    </div>
  );
};
