import { Footer } from '@/components/display/footer/footer';
import { Header } from '@/components/display/header/header';
import WhatsAppButton from '@/components/layout/whatsapp/whatsapp';
import '@/global/globals.css';
import { AppProviders } from '@/providers';
import { Box, CssBaseline } from '@mui/material';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Cristiane Oliveira',
  description: 'Porque beleza não tem idade e nem gênero',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <AppProviders>
          <Header />
          <Box mt={10}>{children}</Box>
          <WhatsAppButton />
          <Footer />
        </AppProviders>
        <CssBaseline />
      </body>
    </html>
  );
}
