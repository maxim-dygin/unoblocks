'use client';

import { Button, Card, Heading, Text } from '@chakra-ui/react';

export default function JoinBanner() {
  return (
    <Card
      bg='teal'
      color='white'
      py={10}
      align="center" 
      mt={10}
      borderRadius="md"
    >
      <Heading as="h2" size="lg" mb={4}>
        Готов начать приключение?
      </Heading>
      <Text mb={6}>
        Присоединяйся сейчас и стань частью мира Unblocks!
      </Text>
      <Button colorScheme="teal" size="lg" maxWidth='180px'>
        Присоединиться
      </Button>
    </Card>
  );
}
