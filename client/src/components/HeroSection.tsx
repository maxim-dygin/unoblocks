'use client';

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Box
      as="section"
      height="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      _after={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <VStack
        spacing={6}
        textAlign="center"
        zIndex={1}
      >
        <Heading as="h1" size="2xl">
          Добро пожаловать в Unblocks
        </Heading>
        <Text fontSize="xl" maxW="600px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          _hover={{ transform: 'scale(1.05)' }}
        >
          Присоединяйся
        </Button>
      </VStack>
    </Box>
  );
}
