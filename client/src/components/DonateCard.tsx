'use client';

import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface DonateCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function DonateCard({ title, price, features }: DonateCardProps) {
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p="6"
      bg={bg}
      border="1px solid"
      borderColor={border}
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      _hover={{ transform: 'scale(1.03)', transition: '0.3s' }}
    >
      <Heading size="md" mb="4">{title}</Heading>
      <Text fontSize="2xl" fontWeight="bold" mb="4">{price}</Text>
      <Stack spacing="2" mb="6">
        {features.map((feature, index) => (
          <Text key={index} fontSize="sm" color="gray.500">{feature}</Text>
        ))}
      </Stack>
      <Button colorScheme="teal" variant="solid">
        Купить
      </Button>
    </Box>
  );
}
