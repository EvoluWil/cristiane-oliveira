'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5511939275814"
      accountName="Cristiane Oliveira Estética"
      avatar="/logo.png"
      statusMessage="online"
      placeholder="Digite sua mensagem"
      chatMessage="Olá! Como posso te ajudar?"
      notificationDelay={15}
    />
  );
}
