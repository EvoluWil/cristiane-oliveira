import "@/global/globals.css";
import { AppProviders } from "@/providers";
import { CssBaseline } from "@mui/material";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cristiane Oliveira",
  description: "Porque beleza não tem idade e nem gênero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <AppProviders>{children}</AppProviders>
        <CssBaseline />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      </body>
    </html>
  );
}
