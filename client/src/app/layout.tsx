import type { Metadata } from "next";
import ClientProviders from "@/components/providers/ClientProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "CRAFTORIA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>
          <Header />
          <Box height="100%">{children}</Box>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
