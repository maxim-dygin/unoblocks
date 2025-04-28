import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header />
          <Box height='100vh'>
            {children}
          </Box>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
