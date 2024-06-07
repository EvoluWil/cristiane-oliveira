'use client';

import { useEffect, useState } from 'react';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
};

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 70,
}) => {
  const [formattedText, setFormattedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setFormattedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return formattedText;
};
